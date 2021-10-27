import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Box,Center } from "@chakra-ui/react";
import RichText from "../components/RichText";
import ImageWithText from "../components/ImageWithText";

const PrivacyPolicy = () => {
  return (
    <Box pb="6vh" className="PrivacyPolicyPage">
      <RichText
        secondHeadingText="We are here to help."
        secondHeadingSize="3vh"
      />
      <Center
        pt="1vh"
        className="richText"
        display="flex"
        flexDir="column"
        textAlign="center"
      >
        <a href="mailto:earthfriend.candles@gmail.com">Email Us</a>
      </Center>
      <ImageWithText
        reverse
        image="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1635276704/earthfriendcandles/privacy_policy_aqj1l4.jpg"
        heading="Shipping & Returns"
        text="         
            'To reduce the carbon footprint of your order, we will ensure that the last mile of your delivery is completed on foot, by bike or electric vehicle
    Delivered within 3-5 working days
    Eco deliveries take place 7 days a week
    Option will show at checkout if available to your selected post code"
      />
    </Box>
  );
};

export default PrivacyPolicy;
