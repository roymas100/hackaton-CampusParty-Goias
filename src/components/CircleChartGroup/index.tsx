import { useStyles } from '@/context/StylesContext';
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { CircleProgressBar, CircleProgressBarContainer } from '../CircleProgressBar';

// import { Container } from './styles';

interface IItems {
    label: string;
    value: number;
    color: string;
}

interface CircleChartGroupProps {
    data: IItems[]
}

const CircleChartGroup: React.FC<CircleChartGroupProps> = ({ data }) => {
  const { theme } = useStyles()
  return <Flex w="100%" flexDir="column">
    <Flex gap="12px" flexWrap="wrap" display="flex" mb="16px" w="100%">
              
              {data.map(({label, value, color}) => (
 <Flex key={label} gap="4px" alignItems="center" justifyContent="center">
 <Flex width="14px" height="14px" borderRadius="100px" background={color}  />
 <Text
 fontWeight= '400'
 fontSize= '14px'
 lineHeight= '20px'
 color={theme.text.primary}
 >{label}</Text>
</Flex>

              ))}
              
             
            </Flex>
            
            <CircleProgressBarContainer>
              {data.map(({label, value, color}) => (
              <CircleProgressBar key={label} progress={value} color={color} />
              
              ))}
            </CircleProgressBarContainer>
  </Flex>;
}

export default CircleChartGroup;