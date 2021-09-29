import { CSSProp, DefaultTheme } from 'styled-components'

import theme from './theme'

export type Theme = typeof theme & DefaultTheme

declare module 'styled-components' {
  type DefaultTheme = Theme
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp
  }
}
