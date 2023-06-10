import GoalBar from '@/components/GoalBar';
import GoalCard from '@/components/GoalCard';
import Menu from '@/components/Menu';
import { useStyles } from '@/context/StylesContext';
import { goals } from '@/mock/goals';
import { Flex, CardBody, Card, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';


const Game: React.FC = () => {
    const { theme } = useStyles()

  return <>
     <Head>
        <title>Escola Segura</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./avatar.svg" />
      </Head>

      <Flex>
        <Menu />

        <Flex padding="24px" pl="309px" background={theme.background} w="100%" justifyContent="flex-start" alignItems="flex-start" flexWrap="wrap" gap="16px" >
            
            <Card maxWidth="400px" width="100%" padding="24px"  bg={theme.card.background}>
                <CardBody display="flex" flexDir="column" gap="48px">
                    <Heading fontSize="24px" color={theme.text.primary}>Escola Estadual Professora Marinete Silva</Heading>
                    <GoalBar value={76} />
                </CardBody>
            </Card>

            <Flex flexWrap="wrap" gap="16px">
              {goals.map(({ ...props }) => <GoalCard key={props.label} {...props} /> )} 
            </Flex>

        </Flex>

      </Flex>

  </>;
}


export default Game;