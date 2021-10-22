import React from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Text, Image, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box className="footer" w="100%">
      <Grid
        className="footerGrid"
        display="flex"
        flexDir="row"
        justifyContent="space-between"
        templateColumns={["repeat(1, 1fr)", "repeat(4, 2fr)"]}
      >
        <Box
          className="footerLogoDiv"
          backgroundColor="whitesmoke"
          borderBottom="0.25pt white solid"
          display="flex"
          flexDir="row"
          p="2rem"
          justifyContent="space-between"
          alignItems="center"
        >
          <Image
            className="footerLogo"
            alignItems="center"
            src="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1633450252/earthfriendcandles/android-chrome-512x512_qgmxhk.png"
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
          <Link to="/customercare">Shipping & Returns</Link>
          <Link to="/customercare">Help/FAQs</Link>
          <Link to="/customercare">Privacy Policy</Link>
        </VStack>

        <Box
          className="footerImgDiv"
          display="flex"
          flexDir="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Image
            className="footerImg"
            w="50vh"
            src="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1633898710/earthfriendcandles/footer_faic6a.jpg"
          />
        </Box>
      </Grid>
      <Box backgroundColor="whitesmoke">
        <Text
          p="1.5vh"
          textAlign="center"
          borderTop="1px solid grey"
          fontSize={"1.8vh"}
        >
          Copyright ©2021 Earthfriend Candles, All Rights Reserved.
        </Text>
        <Text pb="1.5vh" textAlign="center" fontSize={"1.8vh"}>
          Made with ❤ by AK Developorama
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
