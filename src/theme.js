import { css } from 'styled-components'

const font = 'sans-serif'

const black = '#000'
const white = '#fff'

const headerBlack = '#212121'
const backgroundBlack = '#0F0F0F'
const subtitleBlack = '#AAAAAAFF'
const colorScrollBar = '#323232'
const buttonBlack = '#8774E1'
const buttonActive = '#4a3f80'

const subtitleLight = '#8d8d8d'
const scrollBarLight = '#AAAAAAFF'
const backgroundLight = '#EDEEF0'


const fontSizes = [12, 14, 16, 20, 24, 32, 40, 56, 72, 80]
const spaces = [0, 4, 8, 16, 32, 64, 128]

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
}

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const lightTheme = {
  above,
  below,
  font,
  spaces,
  fontSizes,
  colors: {
    colorFont: black,
    headerColor: white,
    subtitleColor: subtitleLight,
    backgroundColor: backgroundLight,
    colorScrollBar: scrollBarLight,
    colorButton: buttonBlack,
    colorTextButton: white,
    colorButtonActive: buttonActive,

  },
}
export const blackTheme = {
  above,
  below,
  font,
  spaces,
  fontSizes,
  colors: {
    colorFont: white,
    headerColor: headerBlack,
    subtitleColor: subtitleBlack,
    backgroundColor: backgroundBlack,
    colorScrollBar: colorScrollBar,
    colorButton: buttonBlack,
    colorTextButton: black,
    colorButtonActive: buttonActive,
  },
}
