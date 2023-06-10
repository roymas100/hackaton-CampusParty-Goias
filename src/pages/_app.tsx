import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { StylesContextProvider } from '@/context/StylesContext'
import { DbContextProvider } from '@/context/DbContext'
export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider>
    <StylesContextProvider>
    <DbContextProvider>    
      <Component {...pageProps} />
    </DbContextProvider>
    </StylesContextProvider>
  </ChakraProvider>
}
