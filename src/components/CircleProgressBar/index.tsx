import { useStyles } from '@/context/StylesContext';
import { Flex } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import ProgressBar from 'react-customizable-progressbar'

// import { Container } from './styles';

interface CircleProgressBarProps {
    progress: number;
    color?: string
}

const CircleProgressBar: React.FC<CircleProgressBarProps> = ({ progress, color }) => {
const {theme} = useStyles()

  return <ProgressBar  progress={progress}
  radius={100} 
  strokeColor={color}>
    <Flex __css={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  margin: '0 auto',
  fontSize: '1.6em',
  fontWeight: 100,
  color: theme.text.primary,
  opacity: 0.5,
  userSelect: 'none',
}}>
  {progress}%
</Flex>
  </ProgressBar>;
}

const CircleProgressBarContainer: React.FC<PropsWithChildren> = ({ children }) => {
    return <Flex gap="8px" flexWrap="wrap" display="flex" justifyContent="center" __css={{
        "&>div": {
          width: '120px !important'
        },
        svg: {
          width: '120px',
          height: '120px'
        }
      }}>
        {children}
      </Flex>
}

export {CircleProgressBar, CircleProgressBarContainer};