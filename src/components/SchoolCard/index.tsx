import { Card, CardBody, CardHeader, Image, Text } from '@chakra-ui/react';
import React from 'react';
import GoalBar from '../GoalBar';

// import { Container } from './styles';

interface SchoolCardProps {
    name: string;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    progress: number;
}

const SchoolCard: React.FC<SchoolCardProps> = ({ name, onClick, progress }) => {

    if (progress === 100) {
        return <Card onClick={onClick} width="322px" cursor="pointer" transition="0.2s transform" _hover={{
            transform: "scale(1.04)"
          }} >
        <CardHeader height="94px" bg="gray" borderTopRadius="4px" justifyContent="flex-end" display="flex">
        <Image
    alt="LevelUp"
    src="/levelup.svg"
    borderRadius={100}
    width="48px"
    height="48px"
  />
        </CardHeader>
        
        <CardBody padding="24px" paddingBottom="36px" display="flex" flexDir="column" gap="24px">
            <Text>
                {name}
            </Text>
        </CardBody>
          </Card>;
    }

  return <Card onClick={onClick} width="322px" cursor="pointer" transition="0.2s transform" _hover={{
            transform: "scale(1.04)"
  }} >
<CardHeader height="94px" bg="gray" borderTopRadius="4px" />

<CardBody padding="24px" paddingBottom="36px" display="flex" flexDir="column" gap="24px">
    <Text>
        {name}
    </Text>
    <GoalBar value={progress} />
</CardBody>
  </Card>;
}

export default SchoolCard;