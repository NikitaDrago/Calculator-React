import React from 'react'
import { HeaderLayout } from '@/layouts'
import { HeaderTitle, HeaderMenu, MenuButton } from '@/components/Header/components'
import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'

const Header = () => {
  return (
    <HeaderLayout>
      <HeaderTitle to="/">Calculator App</HeaderTitle>
      <HeaderMenu>
        <MenuButton exact to={HOME_PAGE_ROUTE}>Home</MenuButton>
        <MenuButton exact to={SETTINGS_PAGE_ROUTE}>Settings</MenuButton>
      </HeaderMenu>
    </HeaderLayout>
  )
}

export default Header
