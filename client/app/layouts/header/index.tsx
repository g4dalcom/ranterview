import Link from 'next/link';
import { ICONS, headerConfig } from '../LayoutConfig';
import * as S from './style';

const Header = () => {
  return (
    <S.Section>
      <h2>Ranterview</h2>
      <S.HeaderMenuBox>
        <S.MenuIcons>
          {headerConfig.map((item) => (
            <div key={item.id}>
              <Link href={item.path}>{item.icon}</Link>
              {item.id === 4 && <span>1</span>}
            </div>
          ))}
        </S.MenuIcons>
        <S.Profile>
          {ICONS.profile}
          <span>g4dalcom</span>
        </S.Profile>
      </S.HeaderMenuBox>
    </S.Section>
  );
};

export default Header;
