import { useStyles } from "@/context/StylesContext";
import {
  Card as ChakraCard,
  CardBody,
  Heading,
  CardFooter,
  Text,
  Flex,
} from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  title: string;
  footer?: string;
  left?: boolean
}

const Card: React.FC<CardProps> = ({ title, children, footer , left}) => {
  const { theme } = useStyles();

  return (
    <ChakraCard
      padding="8px 10px"
      borderRadius={16}
      bg={theme.card.background}
      minW="400px"
      minH="360px"
      flex="1 1 400px"
    >
      <CardBody>
        <Heading
          color={theme.text.primary}
          fontWeight={500}
          fontSize={22}
          lineHeight="29px"
          mb="16px"
        >
          {title}
        </Heading>
        {left?  (<> {children} </>) : (<Flex
          alignItems={"center"}
          justifyContent={"center"}
        >
          {children}
        </Flex>) }
        
        
      </CardBody>
      {footer && (
        <CardFooter>
          <Text
            fontWeight="400"
            fontSize="14px"
            lineHeight="20px"
            opacity={0.4}
            color={theme.text.primary}
          >
            {footer}
          </Text>
        </CardFooter>
      )}
    </ChakraCard>
  );
};

export default Card;
