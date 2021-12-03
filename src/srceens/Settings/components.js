import styled from 'styled-components'

export const SettingsOptions = styled.div`
  padding-left: 85px;
  padding-top: 60px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.colorFont};
`

export const ClearButton = styled.button`
  width: 400px;
  height: 90px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.colorTextButton};
  background-color: ${({ theme }) => theme.colors.colorButton};
  border: none;

  &:hover {
    transform: scale(1.03);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.colorButtonActive};
    transform: scale(.98);
  }
`

export const SettingsTitle = styled.h1`
  font-size: 64px;
  margin-bottom: 45px;
`

export const SettingsSelect = styled.select`
  margin-bottom: 30px;
  margin-top: 10px;
  padding: 25px;
  width: 400px;
  height: 90px;
  font-size: 30px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  outline: none;
  color: ${({ theme }) => theme.colors.colorTextButton};
  background-color: ${({ theme }) => theme.colors.colorButton};

  &:hover {
    transform: scale(1.03);
  }

  &:active {
    transform: scale(.98);
  }
`

export const SelectOption = styled.option``

export const Subtitle = styled.span`
  color: ${({ theme }) => theme.colors.subtitleColor};
`
