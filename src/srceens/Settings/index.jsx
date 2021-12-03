import React, { useCallback } from 'react'
import {
  ClearButton, SelectOption,
  SettingsOptions, SettingsSelect,
  SettingsTitle, Subtitle,
} from '@/srceens/Settings/components'
import { SettingsLayout } from '@/layouts'
import { useDispatch } from 'react-redux'
import { clearHistory } from '@/actions'

export const SettingsPage = ({ onSelectTheme }) => {
  const dispatch = useDispatch()

  const onClickClear = useCallback(() => {
    dispatch(clearHistory(''))
  }, [])

  return (
    <SettingsLayout>
      <SettingsOptions>
        <SettingsTitle>Settings</SettingsTitle>
        <Subtitle>Switch Theme</Subtitle>
        <SettingsSelect onChange={onSelectTheme}
                        defaultValue={localStorage.getItem('theme')}
        >
          <SelectOption>Light Theme</SelectOption>
          <SelectOption>Dark Theme</SelectOption>
        </SettingsSelect>
        <ClearButton onClick={onClickClear}>Clear Calculator History</ClearButton>
      </SettingsOptions>
    </SettingsLayout>
  )
}
