import * as S from './style';

const Navbar = () => {
  return (
    <S.Section>
      <S.Container>
        <S.MenuText>Menu</S.MenuText>
        <S.ULmenu>
          <li>Home</li>
          <li>DailyQA</li>
          <li>History</li>
          <li>Storage</li>
        </S.ULmenu>
      </S.Container>
    </S.Section>
  );
};

export default Navbar;
