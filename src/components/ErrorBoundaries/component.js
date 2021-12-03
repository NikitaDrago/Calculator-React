import styled from 'styled-components'

export const Error = styled.div`
  height: 100%;
  font-size: 32px;
  padding-top: 50px;
  padding-left: 100px;
  color: ${({ theme }) => theme.colors.colorFont};
  background: ${({ theme }) => theme.colors.backgroundColor};
`
