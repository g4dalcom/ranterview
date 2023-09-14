import * as S from './style';
import { navConfig } from '../LayoutConfig';
import Link from 'next/link';
import { Fragment } from 'react';

const Navbar = () => {
  return (
    <S.Container>
      {navConfig.map((group) => (
        <Fragment key={group.id}>
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
        </Fragment>
      ))}
    </S.Container>
  );
};

export default Navbar;
