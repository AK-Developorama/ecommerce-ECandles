import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Box, Grid, Text, Image, Button } from "@chakra-ui/react";
import RichText from "../components/RichText";
import ImageWithText from "../components/ImageWithText";

const HelpFAQs = () => {
  return (
    <Box pb="6vh" className="HelpFAQsPage">
      <RichText
        secondHeadingText="We are here to help."
        secondHeadingSize="3vh"
      />

      <ImageWithText
        reverse
        image="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1633892754/earthfriendcandles/bg1_zrlcdv.jpg"
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

export default HelpFAQs;
