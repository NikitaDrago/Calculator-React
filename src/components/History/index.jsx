import React from 'react'
import { HistoryLayout } from '@/layouts'
import { HistoryContent, HistoryItem, HistoryTitleText } from '@/components/History/components'
import { useSelector } from 'react-redux'
import { historySelector } from '@/store/selectors'

const History = () => {
  const history = useSelector(historySelector)

  return (
    <HistoryLayout>
      <HistoryTitleText>History</HistoryTitleText>
      <HistoryContent>
        {history && history.map(item => <HistoryItem key={`${item}-${Math.random() * item.length}`}>{item}</HistoryItem>)}
      </HistoryContent>
    </HistoryLayout>
  )
}

export default History
