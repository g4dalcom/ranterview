import styled from '@emotion/styled';

export const Section = styled.section`
  flex: 1;
  margin-top: 60px;
`;

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 16px;
`;

export const MenuText = styled.h2`
  text-align: center;
`;

export const ULmenu = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  & li {
    font-size: 2rem;
    padding: 10px;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: antiquewhite;
    }
  }
`;
