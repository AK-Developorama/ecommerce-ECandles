import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Button, Text, Image, Heading } from "@chakra-ui/react";

const ImageWithText = ({
  classname,
  button,
  buttonAddress,
  reverse,
  image,
  heading,
  text,
}) => {
  const reverseSection = reverse ? "row-reverse" : "row";

  return (
    <Flex
      className={classname}
      pt="6vh"
      flexDir={["column", reverseSection]}
      w="100%"
    >
      <Image src={image} />
      <Box
        className="textDiv"
        w={["100%", "50%"]}
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        p="2rem"
      >
        <Heading pb="2rem">{heading}</Heading>
        <Text pb="2rem">{text}</Text>
        {button ? (
          <Link to={buttonAddress}>
            <Button w="10rem" color="white" _hover={{ opacity: "70%" }}>
              Find Out More
            </Button>
          </Link>
        ) : null}
      </Box>
    </Flex>
  );
};

export default ImageWithText;
