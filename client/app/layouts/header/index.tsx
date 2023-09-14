import Link from 'next/link';
import { headerConfig } from '../LayoutConfig';
import * as S from './style';
import ProfileImage from '../../../public/assets/icons/ic_profile.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <S.Section>
      <h2>Ranterview</h2>
      <S.HeaderMenuBox>
        <S.MenuIcons>
          {headerConfig.map((item) => (
            <S.Menu key={item.id}>
              <Link href={item.path}>{item.icon}</Link>
              {item.id === 4 && <S.NotifyCount>1</S.NotifyCount>}
            </S.Menu>
          ))}
        </S.MenuIcons>
        <S.Profile>
          <S.ProfileImage>
            <Image
              src={ProfileImage}
              alt="profile image"
              width={32}
              height={32}
            />
          </S.ProfileImage>
          <span>g4dalcom</span>
        </S.Profile>
      </S.HeaderMenuBox>
    </S.Section>
  );
};

export default Header;
