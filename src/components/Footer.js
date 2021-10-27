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
          <Link to="/about-us">About Us</Link>
          <Link to="/sustainability">Sustainability</Link>
          <Link to="/contact">Contact</Link>
        </VStack>
        <VStack p="2rem">
          <Text>CUSTOMER CARE</Text>
          <Link to="/shipping-returns">Shipping & Returns</Link>
          <Link to="/help-FAQs">Help/FAQs</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
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
            w="36vh"
            src="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1633898710/earthfriendcandles/footer_faic6a.jpg"
          />
        </Box>
      </Grid>
      <Box className="footerLower" backgroundColor="whitesmoke">
        <Text p="1.5vh" textAlign="center" borderTop="1px solid grey">
          Copyright ©2021 Earthfriend Candles, All Rights Reserved.
        </Text>
        <Text pb="1.5vh" textAlign="center">
          <a
            className="developoramaLink"
            href="https://cdpn.io/developorama/debug/f680ddde22aa41b05669b4539970b013"
          >
            Made with ❤ by AK Developorama
          </a>
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
