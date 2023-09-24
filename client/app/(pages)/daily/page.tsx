'use client';

import { useQuery } from '@tanstack/react-query';
import { getAllProblems, getDailyProblems } from '../../api/problem';
import { ProblemType } from '../../types';
import * as S from './style';
import { useState } from 'react';
import useDailyQuery from '@/app/hooks/api/useDailyQuery';

const Daily = () => {
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const data = useDailyQuery();

  const selectQuestionHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    const question = (e.target as HTMLInputElement).value;
    if (selectedQuestion === question) {
      setSelectedQuestion('');
    } else {
      setSelectedQuestion(question);
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
                <S.Question>{p.question}</S.Question>
              </S.QuestionBox>
              <S.AnswerBox isSelected={selectedQuestion === `question_${p.id}`}>
                <span>{p.answer}</span>
              </S.AnswerBox>
            </div>
            <S.ButtonBox>
              <S.Button size="md" variant="outline">
                완료
              </S.Button>
            </S.ButtonBox>
          </S.ProblemLayout>
        ))}
    </S.Section>
  );
};

export default Daily;
