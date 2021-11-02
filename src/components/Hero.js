import React from "react";
import { Box, Image } from "@chakra-ui/react";
import RichText from "../components/RichText";

const Hero = () => {
  return (
    <Box className="heroTitleImage" backgroundColor="white" w="100%">
      <RichText heading="EARTHFRIEND CANDLES" headingSize="1.7em" />
      <Box
        className="heroImg"
        backgroundColor="whitesmoke"
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image
          className="fade-in"
          w="50.1%"
          src="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1633892755/earthfriendcandles/bg2_h7iyih.jpg"
        />
      </Box>
    </Box>
  );
};

export default Hero;
