import { useQuery } from '@tanstack/react-query';
import { getAllProblems } from '../../api/problem';
import { ProblemType } from '../../types';
import * as S from './style';
import { useState } from 'react';

const Problem = () => {
  const [selectedQuestion, setSelectedQuestion] = useState('');

  const selectQuestionHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    const question = (e.target as HTMLInputElement).value;
    if (selectedQuestion === question) {
      setSelectedQuestion('');
    } else {
      setSelectedQuestion(question);
    }
  };

  const { isLoading, isError, data, error } = useQuery<ProblemType[]>({
    queryKey: ['problem'],
    queryFn: getAllProblems,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error instanceof Error && isError)
    return <div>Error: {error.message}</div>;

  return (
    <S.Section>
      <h1>오늘의 문제</h1>
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

export default Problem;
