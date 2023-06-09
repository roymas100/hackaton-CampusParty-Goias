import { Avatar, Button, Flex, Text, Icon, Image } from '@chakra-ui/react';
import React from 'react';

interface MenuItemProps {
    text: string,
    svg: string,
    active?: boolean
}

const menuItems: MenuItemProps[] = [{
    text: 'Dashboard',
    svg: './Category.svg'
}, 
{
    text: 'Escolas',
    svg: './Home.svg'
},
{
    text: 'Análise de Dados',
    svg: './Chart.svg'
},
{
    text: 'Notificações',
    svg: './Bell.svg'
},
{
    text: 'Preferências',
    svg: './Gear.svg'
}]

const Menu: React.FC = () => {
  return (
  <Flex w="285px" h="100vh" bgColor='#FFFFFF' flexDir='column' pt='42px' pb='42px' >
    <Flex gap={8} alignItems='center' pl='60px'>
        <Avatar src='./avatar.svg' height={60} w={60}/>

        <Flex flexDir='column'>
            <Text fontWeight={500} fontSize={18} lineHeight="27px" color='rgba(0, 0, 0, 1)'>SEDUC</Text>
            <Text fontWeight={400} fontSize={14} lineHeight="21px" color='rgba(0, 0, 0, 0.5)'>ADM</Text>
        </Flex>
    </Flex>

    <Flex flexDir='column' w="100%" pt="32px" pb="16px" gap="16px">
        {menuItems.map(item => <MenuItem key={item.text} svg={item.svg} text={item.text} active={item.text === 'Dashboard'}/>)}
    </Flex>

  </Flex>)
}

const MenuItem: React.FC<MenuItemProps> = ({ svg, text, active }) => {
return ( 
    <Flex position="relative" gap="8px" w="100%" height="36px" pl="60px" alignItems="center" opacity={active ? 1 : 0.5} _hover={{
        opacity: 1,
    }} cursor="pointer" transition='0.2s backgroundColor, 0.2s opacity'>
        <Image src={svg} alt={text} boxSize="24px"></Image>
        <Text fontWeight={500} fontSize={14} lineHeight="21px"color='#000'>{text}</Text>
        {active && <Flex position="absolute" left="-10px" height="36px" width="19px" borderRadius="16px" backgroundColor="#E5D405"></Flex>}
    </Flex>) 
}

export default Menu;