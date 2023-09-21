import styled from '@emotion/styled';

export const ModalLayout = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.724);
`;

export const Container = styled.div`
  border: 2px solid var(--color-main);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-width: 340px;
  width: 50%;
  padding: 30px;
  background-color: var(--color-main-bg);
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;

  & label {
    display: flex;
    width: 100%;
  }

  & input {
    width: calc(100% - 42px);
    color: var(--color-dark);
  }

  & textarea {
    resize: none;
    width: calc(100% - 42px);
    height: 300px;
    color: var(--color-dark);
  }
`;

export const ContentTitle = styled.span`
  margin-right: 10px;
`;

export const CategoryBox = styled.div`
  align-self: flex-end;
`;

export const ButtonBox = styled.form`
  display: flex;
  justify-content: center;
`;
