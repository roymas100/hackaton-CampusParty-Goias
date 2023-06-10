import { useStyles } from '@/context/StylesContext';
import { Flex, Progress, Text } from '@chakra-ui/react';
import React from 'react';

interface ProgressBarProps {
  label: string;
  percent: number;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, percent, color }) => {
  const { theme } = useStyles()

  return <Flex flexDir="column" gap="6px" width="100%">
    <Flex flexDir="column" >
      
      <Flex w="100%" justifyContent={"space-between"}>
      <Text
        fontWeight="400"
        fontSize="14px"
        lineHeight="20px"
        color={theme.text.primary}
      >{label}</Text>
      <Text
        color={theme.text.primary}
        >
        {percent} menções
      </Text>
      </Flex>

      <Progress
        height="8px"
        value={percent}
        borderRadius="4px"
        w="100%"
        __css={{
          backgroundColor: "#F2F2F2",
          "&>div": { backgroundColor: color || theme.primary }
        }}
      />


    </Flex>

  </Flex>;
}

export default ProgressBar;