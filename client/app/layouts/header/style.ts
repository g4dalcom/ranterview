import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-main-bg);
  color: var(--color-main);
  padding: 20px;
`;

export const Logo = styled.h2`
  cursor: pointer;
`;

export const HeaderMenuBox = styled.div`
  display: flex;
  gap: 40px;
`;

export const MenuIcons = styled.div`
  display: flex;
  gap: 20px;
`;

export const Menu = styled.div`
  position: relative;
`;

export const NotifyCount = styled.span`
  width: 16px;
  height: 16px;
  background-color: red;
  color: var(--color-main);
  border-radius: 50%;
  position: absolute;
  font-size: 1.2rem;
  text-align: center;
  top: -8px;
  right: -8px;
`;

export const Profile = styled.div`
  display: flex;
  gap: 10px;
`;

export const ProfileImage = styled.span`
  background-color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;
