import * as S from './style';
import { navConfig } from '../LayoutConfig';
import Link from 'next/link';

const Navbar = () => {
  return (
    <S.Section>
      <S.Container>
        {navConfig.map((group) => (
          <>
            <S.MenuText>{group.subheader}</S.MenuText>
            <S.ULmenus>
              {group.items.map((e) => (
                <li key={e.id}>
                  <Link href={e.path}>
                    {e.icon}
                    <span>{e.title}</span>
                  </Link>
                </li>
              ))}
            </S.ULmenus>
          </>
        ))}
      </S.Container>
    </S.Section>
  );
};

export default Navbar;
