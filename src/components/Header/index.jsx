import React from 'react'
import { HeaderLayout } from '@/layouts'
import { HeaderTitle, HeaderMenu, MenuButton } from '@/components/Header/components'

const Header = () => {
  return (
    <HeaderLayout>
      <HeaderTitle to="/">Calculator App</HeaderTitle>
      <HeaderMenu>
        <MenuButton exact to="/">Home</MenuButton>
        <MenuButton exact to="/settings">Settings</MenuButton>
      </HeaderMenu>
    </HeaderLayout>
  )
}

export default Header
