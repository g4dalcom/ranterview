import useClickAway from '@/app/hooks/useClickAway';
import { BaseSyntheticEvent, useState } from 'react';
import SvgIconStyle from '../shared/SvgIconStyle';
import * as S from './style';

interface Props {
  setOption: React.Dispatch<React.SetStateAction<string>>;
}

const SelectBox = ({ setOption }: Props) => {
  const [isSelected, selectRef, selectHandler] = useClickAway();
  const [viewValue, setViewValue] = useState('카테고리');

  const replaceValue = [
    { view: '클라이언트', replace: 'CLIENT' },
    { view: '서버', replace: 'SERVER' },
    { view: '네트워크', replace: 'NETWORK' },
    { view: '운영체제', replace: 'OS' },
    { view: '자료구조', replace: 'DATA_STRUCTURE' },
    { view: '엔지니어링', replace: 'ENGINEERING' },
  ];

  const handleSelectValue = (e: BaseSyntheticEvent) => {
    const current = e.target.getAttribute('value');
    setViewValue(current);

    try {
      const temp = replaceValue.filter((option) => option.view === current);
      setOption(temp[0].replace);
    } catch (e) {
      console.error('올바른 옵션인지 확인해주세요', e);
    }
  };

  return (
    <S.SelectBox ref={selectRef} onClick={selectHandler}>
      <S.Label>{viewValue}</S.Label>
      <S.SelectOptions isOpen={isSelected}>
        {replaceValue.map((option) => (
          <S.Option
            key={option.view}
            value={option.view}
            onClick={handleSelectValue}
          >
            {option.view}
          </S.Option>
        ))}
      </S.SelectOptions>
      <SvgIconStyle
        src={`assets/icons/ic_selectArrow.svg`}
        sx={{ width: 20, height: 20 }}
      />
    </S.SelectBox>
  );
};

export default SelectBox;
