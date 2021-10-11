import React from "react";
import { Box, Heading, Text, Center } from "@chakra-ui/react";

const RichText = ({
  heading,
  headingSize,
  secondHeadingText,
  secondHeadingSize,
  text,
  textSize,
}) => {
  return (
    <Box>
      <Center display="flex" flexDir="column" textAlign="center">
        <Heading py="4vh" fontSize={headingSize}>
          {heading}
        </Heading>

        {secondHeadingText ? (
          <Heading fontSize={secondHeadingSize} py="4vh">
            {secondHeadingText}
          </Heading>
        ) : null}
        {text ? (
          <Text fontSize={textSize} pb="4vh">
            {text}
          </Text>
        ) : null}
      </Center>
    </Box>
  );
};

export default RichText;
