import { useStyles } from '@/context/StylesContext';
import { Card, CardBody, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { CheckCircleIcon } from '@chakra-ui/icons'
import { IGoalCard } from '@/interface/goals.interface';

// import { Container } from './styles';



const GoalCard: React.FC<IGoalCard> = ({ icon, isCompleted, label, points}) => {
    const { theme } = useStyles()
    return (
        <Card padding="8px 10px" borderRadius={16} bg={theme.card.background} w="220px" >
    <CardBody alignItems="center" justifyContent="center" display="flex" flexDirection="column">
            <Flex 
            boxShadow='0px 9.39205px 25.0455px rgba(0, 0, 0, 0.1)'
            alignItems="center"
            justifyContent="center"
            width="60px"
            height="60px"
            borderRadius="100px"
            mb="16px"
            bg={theme.goal.backgroundIcon}
            >
                <Image src={icon} width="32px" height="32px" />
            </Flex>

        <Flex mt="16px" flexDir="column"  alignItems="center" gap="8px"
            justifyContent="center">

        <Text fontWeight={700} fontSize="16px"  color={theme.text.primary} textAlign="center">{label}</Text>

        <Flex>
            {isCompleted ? <CheckCircleIcon color={theme.goal.primary} width="24px" height="24px" /> :
            
            <Text fontWeight={700} fontSize="16px" color={theme.goal.secundary}>+{points}</Text>
            }
            
        </Flex>
        </Flex>
        </CardBody>
    </Card>
    )
}

export default GoalCard;