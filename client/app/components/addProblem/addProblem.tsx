import { Button } from '@/app/(pages)/daily/style';
import * as S from './style';
import SelectBox from '../selectBox/selectBox';
import { useState } from 'react';

const AddProblem = () => {
  const [category, setCategory] = useState('');

  return (
    <S.Container>
      <h2>등록하기</h2>
      <S.ContentBox>
        <S.CategoryBox>
          <SelectBox setOption={setCategory} />
        </S.CategoryBox>
        <label>
          <S.ContentTitle>질문</S.ContentTitle>
          <input type="text" />
        </label>
        <label>
          <S.ContentTitle>답변</S.ContentTitle>
          <textarea />
        </label>
      </S.ContentBox>
      <S.ButtonBox>
        <Button size="sm" variant="default">
          등록
        </Button>
      </S.ButtonBox>
    </S.Container>
  );
};

export default AddProblem;
