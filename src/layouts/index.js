import styled from 'styled-components'

export const HeaderLayout = styled.div`
  height: 36px;
  display: flex;
  justify-content: space-between;
  padding: 42px 32px;
  align-items: center;
  font-size: 32px;
  background-color: ${({ theme }) => theme.colors.headerColor};
`
export const HistoryLayout = styled.div`
  width: 410px;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    top: 20px;
    left: 0;
    width: 2px;
    height: 84vh;
    background-color: ${({ theme }) => theme.colors.colorScrollBar};
  }
`

export const KeypadLayout = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 130px);
  grid-template-rows: repeat(4, 130px);
  justify-content: end;
  row-gap: 35px;
  column-gap: 130px;
  margin-top: 30px;
  padding-top: 30px;

  &::before {
    position: absolute;
    content: "";
    right: -95px;
    width: 81vw;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.colorScrollBar};
  }
`

export const MainLayout = styled.div`
  display: flex;
  height: 100%;
  background: ${({ theme }) => theme.colors.backgroundColor};

`
export const SettingsLayout = styled.div`
  background: ${({ theme }) => theme.colors.backgroundColor};
  height: 100%;
`
