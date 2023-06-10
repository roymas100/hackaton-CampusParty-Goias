import { Card, CardBody, CardHeader, Text } from '@chakra-ui/react';
import React from 'react';
import GoalBar from '../GoalBar';

// import { Container } from './styles';

interface SchoolCardProps {
    name: string;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}

const SchoolCard: React.FC<SchoolCardProps> = ({ name, onClick }) => {
  return <Card onClick={onClick} width="322px" cursor="pointer" borderStyle="solid" borderWidth="2px" borderColor="gray"  _hover={{
    borderColor: "#000"
  }} >
<CardHeader height="94px" bg="gray" borderTopRadius="4px" />

<CardBody padding="24px" paddingBottom="36px" display="flex" flexDir="column" gap="24px">
    <Text>
        {name}
    </Text>
    <GoalBar value={10} />
</CardBody>
  </Card>;
}

export default SchoolCard;