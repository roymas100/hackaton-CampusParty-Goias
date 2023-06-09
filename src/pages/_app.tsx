import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { StylesContextProvider } from '@/context/StylesContext'
export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider>
    <StylesContextProvider>
      
    <Component {...pageProps} />
    </StylesContextProvider>
  </ChakraProvider>
}
