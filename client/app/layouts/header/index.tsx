import Image from 'next/image';
import * as S from './style';

const Header = () => {
  return (
    <S.Section>
      <h2>Dashboard</h2>
      <div>
        <Image
          src="../../../public/assets/icons/ic_search.svg"
          alt="search icon"
          width={24}
          height={24}
        />
        <span>아이콘</span>
        <span>아이콘</span>
        <span>아이콘</span>
      </div>
      <div>
        <span>프로필 사진</span>
        <span>프로필 이름</span>
      </div>
    </S.Section>
  );
};

export default Header;
