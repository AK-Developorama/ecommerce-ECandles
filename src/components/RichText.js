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
    <Center
      px="0.5em"
      pr="6vh"
      pl="6vh"
      className="richText"
      display="flex"
      flexDir="column"
      textAlign="center"
    >
      <Heading py="4vh" fontSize={headingSize}>
        {heading}
      </Heading>

      {secondHeadingText ? (
        <Heading fontSize={secondHeadingSize}>{secondHeadingText}</Heading>
      ) : null}
      {text ? (
        <Text fontSize={textSize} pb="4vh">
          {text}
        </Text>
      ) : null}
    </Center>
  );
};

export default RichText;
