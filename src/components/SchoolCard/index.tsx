import { Card, CardBody, CardHeader, Text } from '@chakra-ui/react';
import React from 'react';
import GoalBar from '../GoalBar';

// import { Container } from './styles';

interface SchoolCardProps {
    name: string
}

const SchoolCard: React.FC<SchoolCardProps> = ({ name }) => {
  return <Card width="322px" >
<CardHeader height="94px" bg="gray" borderTopRadius="8px" />

<CardBody padding="24px" paddingBottom="36px" display="flex" flexDir="column" gap="24px">
    <Text>
        {name}
    </Text>
    <GoalBar value={10} />
</CardBody>
  </Card>;
}

export default SchoolCard;