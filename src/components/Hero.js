import React from "react";
import { Box, Button, Text, Image, Center } from "@chakra-ui/react";
import RichText from "../components/RichText";
import ImageWithText from "../components/ImageWithText";

const Hero = () => {
  return (
    <>
      <Box backgroundColor="white" w="100%" h="43vh">
        <RichText heading="EARTHFRIEND CANDLES" headingSize="4vh" />
        <Box
          borderBottom="0.25pt white solid"
          backgroundColor="whitesmoke"
          display="flex"
          flexDir="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Image
            className="fade-in"
            w="50%"
            src="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1633892755/earthfriendcandles/bg2_h7iyih.jpg"
          />
        </Box>
      </Box>
    </>
  );
};

export default Hero;
