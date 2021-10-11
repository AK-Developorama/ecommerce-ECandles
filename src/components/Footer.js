import React from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Text, Image, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box className="footer" w="100%">
      <Grid
        display="flex"
        flexDir="row"
        justifyContent="space-between"
        templateColumns={["repeat(1, 1fr)", "repeat(4, 2fr)"]}
      >
        <Box
          backgroundColor="whitesmoke"
          borderBottom="0.25pt white solid"
          backgroundColor="whitesmoke"
          display="flex"
          flexDir="row"
          p="2rem"
          justifyContent="space-between"
          alignItems="center"
        >
          <Image
            alignItems="center"
            src="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1633450252/earthfriendcandles/android-chrome-512x512_qgmxhk.png"
            w={"5vw"}
          />
        </Box>
        <VStack p="2rem">
          <Text>COMPANY</Text>
          <Link to="/">About Us</Link>
          <Link to="/">Sustainability</Link>
          <Link to="/">Contact</Link>
        </VStack>
        <VStack p="2rem">
          <Text>CUSTOMER CARE</Text>
          <Link to="/">Help/FAQs</Link>
          <Link to="/">Shipping & Returns</Link>
          <Link to="/">Privacy Policy</Link>
        </VStack>

        <Box
          display="flex"
          flexDir="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Image
            w="50vh"
            src="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1633898710/earthfriendcandles/footer_faic6a.jpg"
          />
          
        </Box>
      </Grid>
      <Box backgroundColor="whitesmoke">
        <Text
          textAlign="center"
          borderTop="1px solid grey"
          p="1.5vh"
          fontSize={"1.8vh"}
        >
          Copyright © 2011-2020 Earthfriend Candles, All Rights Reserved.
        </Text>
        <Text textAlign="center" fontSize={"1.8vh"}>
          Made with ❤ by AK Developorama
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
