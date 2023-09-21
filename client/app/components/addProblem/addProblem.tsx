import { Button } from '@/app/(pages)/daily/style';
import * as S from './style';
import SelectBox from '../selectBox/selectBox';
import { useEffect, useRef, useState } from 'react';
import useInput from '@/app/hooks/useInput';
import { useCreateProblem } from '@/app/hooks/api/useCreateProblem';

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddProblem = ({ isModalOpen, setIsModalOpen }: Props) => {
  const [category, setCategory] = useState('');
  const [questionValue, questionHandler, questionReset] = useInput('');
  const [answerValue, anwerHandler, answerReset] = useInput('');
  const createProblemMutation = useCreateProblem();
  const modalRef = useRef<HTMLDivElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createProblemMutation.mutate(
      { question: questionValue, answer: answerValue, category: category },
      {
        onSuccess: () => {
          questionReset;
          answerReset;
          setIsModalOpen(false);
        },
      },
    );
  };

  const handleClickOutside = (e: React.BaseSyntheticEvent | MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target))
      setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('mousedown', handleClickOutside);
      return () => window.removeEventListener('mousedown', handleClickOutside);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  return (
    <S.ModalLayout>
      <S.Container ref={modalRef}>
        <h2>등록하기</h2>
        <S.ContentBox>
          <S.CategoryBox>
            <SelectBox setOption={setCategory} />
          </S.CategoryBox>
          <label>
            <S.ContentTitle>질문</S.ContentTitle>
            <input
              type="text"
              onChange={questionHandler}
              value={questionValue}
            />
          </label>
          <label>
            <S.ContentTitle>답변</S.ContentTitle>
            <textarea onChange={anwerHandler} value={answerValue} />
          </label>
        </S.ContentBox>
        <S.ButtonBox onSubmit={submitHandler}>
          <Button size="sm" variant="default">
            등록
          </Button>
        </S.ButtonBox>
      </S.Container>
    </S.ModalLayout>
  );
};

export default AddProblem;
