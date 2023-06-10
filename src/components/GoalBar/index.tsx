import { useStyles } from '@/context/StylesContext';
import { Flex, Image, Progress } from '@chakra-ui/react';
import React from 'react';

// import { Container } from './styles';

interface GoalBarProps {
    value: number;
}

const GoalBar: React.FC<GoalBarProps> = ({ value = 0 }) => {
    const { theme } = useStyles()

  return <Flex position="relative" w="100%">
  <Progress
    height="12px"
    value={value}
    hasStripe
    colorScheme="blue"
    borderRadius="8px"
    w="100%"
    bg="#f1f1f1"
    __css={{
        // '&>div': {
        //     background: theme.goal.primary
        // }
    }}
  />
  <Flex
    position="absolute"
    top="-20px"
    left="25%"
    gap="1px"
    flexDir="column"
    alignItems="center"
  >
    <Image
      alt="logo"
      borderRadius={100}
      width="54px"
      height="54px"
      src="/logo.svg"
    />
    {/* <Text fontWeight={700} fontSize="16px" color={theme.goal.secundary}>
      +5
    </Text> */}
  </Flex>

  <Flex
    position="absolute"
    top="-20px"
    left="60%"
    gap="1px"
    flexDir="column"
    alignItems="center"
  >
    <Image
      alt="logo"
      borderRadius={100}
      width="54px"
      height="54px"
      src="/logo.svg"
    />
    {/* <Text fontWeight={700} fontSize="16px" color={theme.goal.secundary}>
      +10
    </Text> */}
  </Flex>

  <Image
    alt="LevelUp"
    src="/levelup.svg"
    position="absolute"
    top="-22px"
    right={-2}
    borderRadius={100}
    width="54px"
    height="54px"
  />
</Flex>
}

export default GoalBar;