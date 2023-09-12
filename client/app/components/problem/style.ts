import styled from '@emotion/styled';

interface StyledProps {
  size: string;
  variant: string;
}

const colors: { [key: string]: string } = {
  default: 'rgb(36, 41, 47)',
  danger: 'rgb(207, 34, 46)',
  outline: 'rgb(9, 105, 218)',
};

const sizeStyles: { [key: string]: { [subKey: string]: string } } = {
  sm: {
    fontSize: '1.2rem',
    padding: '3px 12px',
  },
  md: {
    fontSize: '1.4rem',
    padding: '5px 16px',
  },
  lg: {
    fontSize: '1.6rem',
    padding: '9px 20px',
  },
};

export const ButtonBox = styled.div`
  display: flex;
  justify-content: end;
  padding: 12px;
`;

export const Button = styled.button<StyledProps>`
  border-radius: 8px;
  border: 1px solid rgba(27, 31, 36, 0.15);
  background-color: rgb(246, 248, 250);
  color: ${(props) => colors[props.variant]};
  ${(props) => sizeStyles[props.size]};
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  appearance: none;
  user-select: none;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex: 4;
  gap: 8px;
  background-color: #f9f9f9;
`;

export const ProblemLayout = styled.article`
  border-radius: 8px;
  border: 1px solid rgba(27, 31, 36, 0.15);
`;

export const QuestionBox = styled.label`
  display: inline-block;
  width: 100%;
  padding: 12px;
  cursor: pointer;

  & > input {
    appearance: none;
  }
`;

export const Category = styled.span`
  border-radius: 12px;
  width: 96px;
  height: 32px;
  font-weight: 700;
  margin-right: 1.6rem;
  font-size: 1.6rem;
  border: 0;
  background-color: rgb(187, 209, 232);
  color: ${colors['default']};
  padding: 0.5rem;
`;

export const Question = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
`;

export const AnswerBox = styled.div<{ isSelected: boolean }>`
  padding: 12px;
  display: ${(props) => !props.isSelected && 'none'};
`;
