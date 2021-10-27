import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Box, Grid, Text, Image, Button, Center } from "@chakra-ui/react";
import RichText from "../components/RichText";
import ImageWithText from "../components/ImageWithText";

const AboutUs = () => {
  return (
    <Box pb="6vh" className="AboutUsPage">
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
        image="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1635276596/earthfriendcandles/about_us_abp0ao.jpg"
        heading="About Us"
        text="         
            'To reduce the carbon footprint of your order, we will ensure that the last mile of your delivery is completed on foot, by bike or electric vehicle
    Delivered within 3-5 working days
    Eco deliveries take place 7 days a week
    Option will show at checkout if available to your selected post code"
      />
    </Box>
  );
};

export default AboutUs;
