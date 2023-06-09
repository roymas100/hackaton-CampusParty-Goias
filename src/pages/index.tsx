import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import Menu from '@/components/Menu'
import { useCallback } from 'react'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Escola Segura</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./avatar.svg" />
      </Head>
      <Flex>
        <Menu />
        <Map />
      </Flex>
    </>
  )
}
