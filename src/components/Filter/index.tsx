import { Flex, Select } from '@chakra-ui/react';
import React from 'react';
import { useStyles } from '@/context/StylesContext';

interface FilterProps {
    selected: string[],
    schools: string[],
}

const Filter: React.FC<FilterProps> = ({ selected, schools }) => {
    const { theme }  = useStyles()

  return <Flex width="100%" bg={theme.filter.background} borderRadius="10px" alignItems="center" padding="8px" justifyContent="space-between">
    <Flex>
    {selected.map(item => <></>)}
    </Flex>
    <Select
    borderRadius="16px" background={theme.filter.button}
    fontWeight= "400"
    fontSize= "14px"
    lineHeight= "20px"
    color={theme.filter.text}
    flex="1 1 80px"
    size="sm"
    borderColor={theme.filter.button}
    maxW="380px"
    placeholder='Filtrar por escolas'
    justifySelf="flex-end"
    >
        {schools.map(school => <option value={school} key={school}>{school}</option> )}
    </Select>
  </Flex>;
}

export default Filter;