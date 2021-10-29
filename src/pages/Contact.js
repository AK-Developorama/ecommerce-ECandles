import React from "react";
import ContactForm from "../components/ContactForm";
import { Box, Flex, Button, Text, Image, Heading } from "@chakra-ui/react";
import RichText from "../components/RichText";

const Contact = () => {
  return (
    <Box pb="6vh" w="100%" className="contactDiv">
      <RichText
        secondHeadingText="We are here to help. Please use the form to get in touch."
        secondHeadingSize="3vh"
      />

      <Flex className="contactDiv" pt="6vh" w="100%" flexDirection="row">
        <Box
          className="contactFormDiv"
          w="50%"
          display="flex"
          px="2rem"
          flexDir="column"
          justifyContent="right"
          alignItems="right"
        >
          <ContactForm />
        </Box>
        
        <Image
          alt="contact image of hand holding candle"
          className="contactImg"
          src="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1635276595/earthfriendcandles/contact_d0n5pl.jpg"
        />
      </Flex>
    </Box>
  );
};

export default Contact;
