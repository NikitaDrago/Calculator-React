import React, { Suspense, useCallback, useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'
import { ThemeProvider } from 'styled-components'
import Header from '@/components/Header'
import Loader from '@/components/Loader'
import { lightTheme, blackTheme } from '@/theme'
import { themes } from '@/constants/themes'
import { HomePage } from '@/srceens/Home'
import { SettingsPage } from '@/srceens/Settings'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '@/actions'


export const App = () => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.calculatorReduce.theme)

  const getTheme = useCallback(handleTheme => {
    switch (handleTheme) {
      case themes.dark: {
        return blackTheme
      }
      case themes.light : {
        return lightTheme
      }
    }
  }, [])

  const handleSelectTheme = useCallback(e => {
    dispatch(setTheme(e.target.value))
    localStorage.setItem('theme', e.target.value)
  }, [])

  const startSettingsPage = useCallback(() => {
    return <SettingsPage onSelectTheme={handleSelectTheme} />
  }, [theme])

  useEffect(() => {
    const getTheme = localStorage.getItem('theme')
    getTheme && dispatch(setTheme(getTheme))
  }, [])

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <Suspense fallback={<Loader />}>
        <Header />
        <Switch>
          <Route
            exact
            path={HOME_PAGE_ROUTE}
            component={HomePage}
          />
          <Route
            exact
            path={SETTINGS_PAGE_ROUTE}
            component={startSettingsPage}
          />
        </Switch>
      </Suspense>
    </ThemeProvider>
  )
}
