import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderTitle = styled(NavLink)`
  text-decoration: none;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.colorFont};
`

export const HeaderMenu = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
`

export const MenuButton = styled(NavLink)`
  font-size: 32px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.colorFont};

  &.active {
    border-bottom: 2px solid;
  }

  &:hover {
    transform: scale(1.09);
  }

  &:active {
    transform: scale(.95);
  }
`
