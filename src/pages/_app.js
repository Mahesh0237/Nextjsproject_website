import '@/styles/globals.css'
import Layout from '../components/layout/Layoutwrapper'
import { useCallback, useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
export default function App({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = () => {
    if (colorScheme === 'dark') {
      setColorScheme('light')
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    } else {
      setColorScheme('dark')
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    }

  }

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Layout >
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
