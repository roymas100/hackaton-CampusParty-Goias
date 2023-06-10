import React from 'react';

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    StatDownArrow,
    Select,
  } from '@chakra-ui/react'
import { useStyles } from '@/context/StylesContext';

const DropdownList: React.FC = () => {
    const {theme} = useStyles();

  return (
    <Select
    borderRadius="16px" background={theme.filter.button}
    fontWeight= "400"
    fontSize= "14px"
    lineHeight= "20px"
    color={theme.filter.text}
    flex="1 1 80px"
    borderColor={theme.filter.button}
    placeholder='Filtrar por escolas'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
    </Select>
  ) 
}

export default DropdownList;