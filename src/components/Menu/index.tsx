import { Avatar, Flex, Text } from '@chakra-ui/react';
import React from 'react';

// import { Container } from './styles';

const Menu: React.FC = () => {
  return <Flex w="285px" h="100%" bgColor='#FFFFFF'>
    <Flex>
        <Avatar src='./avatar.svg' />

        <Flex>
            <Text fontWeight={500} fontSize={18} lineHeight={27} color='rgba(0, 0, 0, 1)'>SEDUC</Text>
            <Text fontWeight={400} fontSize={14} lineHeight={21} color='rgba(0, 0, 0, 0.5)'>ADM</Text>
        </Flex>
    </Flex>


  </Flex>;
}

export default Menu;