'use client';

import * as S from './style';
import { useState } from 'react';
import useDailyQuery from '@/app/hooks/api/useDailyQuery';

const Daily = () => {
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [completeData, setCompleteData] = useState<Number[]>([]);
  const data = useDailyQuery();

  const selectQuestionHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    const question = (e.target as HTMLInputElement).value;
    if (selectedQuestion === question) {
      setSelectedQuestion('');
    } else {
      setSelectedQuestion(question);
    }
  };

  const completionHandler = (id: number) => {
    if (completeData.includes(id)) {
      setCompleteData(completeData.filter((p) => p !== id));
    } else {
      setCompleteData([...completeData, id]);
    }
  };

  return (
    <S.Section>
      <h1>Daily QA</h1>
      {Array.isArray(data) &&
        data.map((p) => (
          <S.ProblemLayout key={p.id}>
            <div>
              <S.QuestionBox>
                <input
                  type="radio"
                  name="question_box"
                  value={`question_${p.id}`}
                  onClick={selectQuestionHandler}
                />
                <S.Category>{p.category}</S.Category>
                <S.Question
                  style={{
                    textDecoration: completeData.includes(p.id)
                      ? 'line-through'
                      : 'none',
                  }}
                >
                  {p.question}
                </S.Question>
              </S.QuestionBox>
              <S.AnswerBox isSelected={selectedQuestion === `question_${p.id}`}>
                <span>{p.answer}</span>
              </S.AnswerBox>
            </div>
            <S.ButtonBox>
              <S.Button
                onClick={() => completionHandler(p.id)}
                size="md"
                variant={completeData.includes(p.id) ? 'danger' : 'outline'}
              >
                {completeData.includes(p.id) ? '취소' : '완료'}
              </S.Button>
            </S.ButtonBox>
          </S.ProblemLayout>
        ))}
    </S.Section>
  );
};

export default Daily;
