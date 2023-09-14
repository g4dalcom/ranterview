import styled from '@emotion/styled';

export const Container = styled.article`
  flex: 0.6;
  background-color: var(--color-main-bg);
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--color-main);
  padding: 40px 10px;
  border-right: 2px solid var(--color-soft-bg);
`;

export const MenuText = styled.span`
  font-size: 1.2rem;
  font-weight: 200;
  color: var(--color-soft);
`;

export const ULmenus = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & li {
    padding: 10px;
    cursor: pointer;
    gap: 10px;
    border-radius: 5px;

    & a {
      display: flex;
      gap: 10px;
    }

    &:hover {
      background-color: var(--color-soft-bg);
    }
  }
`;
