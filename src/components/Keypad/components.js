import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 32px;
  border: none;
  cursor: pointer;
  font-size: 64px;
  color: ${({ theme }) => theme.colors.colorTextButton};
  background-color: ${({ theme }) => theme.colors.colorButton};

  &:hover {
    transform: scale(1.03);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.colorButtonActive};
    transform: scale(.98);
  }
`
