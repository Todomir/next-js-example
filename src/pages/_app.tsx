import '@fontsource/raleway/400.css'
import '@fontsource/raleway/600.css'
import '@fontsource/raleway/700.css'
import '@fontsource/raleway/900.css'

import { Container } from '@components/atoms'
import GlobalStyles from '@styles/global'
import theme from '@styles/theme'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Component {...pageProps} />
        <GlobalStyles />
      </Container>
    </ThemeProvider>
  )
}
export default MyApp
