import styled from 'styled-components'

export const HistoryTitleText = styled.h3`
  font-size: 32px;
  font-weight: normal;
  margin-top: 30px;
  margin-bottom: 50px;
  text-align: center;
  color: ${({ theme }) => theme.colors.colorFont};
`
export const HistoryContent = styled.div`
  overflow-y: scroll;
  height: 70vh;
  width: 80%;
  font-size: 28px;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.colorFont};
  &::-webkit-scrollbar {
    width: 11px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.colorScrollBar};
    border-radius: 32px;
  }
`

export const HistoryItem = styled.span`
  margin-bottom: 10px;
`
