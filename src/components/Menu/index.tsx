import { useStyles } from '@/context/StylesContext';
import { Avatar, Button, Flex, Text, Icon, Image } from '@chakra-ui/react';
import React from 'react';
import { ReactSVG } from 'react-svg'

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
  const { theme, setColorMode } = useStyles()

  return (
  <Flex w="285px" h="100vh" bgColor={theme.menu.background} flexDir='column' pt='42px' pb='42px' >
    <Flex gap="14px" alignItems='center' pl='32px'>
        <Avatar src='./avatar.svg' height="60px" w="60px" borderWidth="2px" borderStyle="solid" borderColor={theme.menu.select}/>

        <Flex flexDir='column'>
            <Text fontWeight={500} fontSize={18} lineHeight="27px" color={theme.text.primary}>SEDUC</Text>
            <Text fontWeight={400} fontSize={14} lineHeight="21px" color={theme.text.primary} opacity={0.5}>ADM</Text>
        </Flex>
    </Flex>

    <Flex flexDir='column' w="100%" pt="32px" pb="16px" gap="16px">
        {menuItems.map(item => <MenuItem key={item.text} svg={item.svg} text={item.text} active={item.text === 'Dashboard'}/>)}
    </Flex>

    <Button onClick={() => setColorMode(state => state === 'DARK' ? 'LIGHT' : 'DARK')}>Toggle color mode</Button>
  </Flex>)
}

const MenuItem: React.FC<MenuItemProps> = ({ svg, text, active }) => {
    const {theme} = useStyles();
return ( 
    <Flex position="relative" gap="8px" w="100%" height="36px" pl="32px" alignItems="center" display="flex" justifyContent="flex-start"
    __css={{
        "svg>*": {
            stroke: theme.text.primary
        }
    }}
    opacity={active ? 1 : 0.5} _hover={{
        opacity: 1,
    }} cursor="pointer" transition='0.2s backgroundColor, 0.2s opacity' >
        {/* <Image src={svg} alt={text} boxSize="24px" color={theme.text.primary}></Image> */}
        <ReactSVG src={svg} />
        <Text color={theme.text.primary} fontWeight={500} fontSize={14} lineHeight="21px" >{text}</Text>
        {active && <Flex position="absolute" left="-10px" height="36px" width="19px" borderRadius="16px" background={theme.menu.select}></Flex>}
    </Flex>) 
}

export default Menu;