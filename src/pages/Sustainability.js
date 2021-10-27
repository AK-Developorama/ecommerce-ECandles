import React from "react";
import { Box, Center } from "@chakra-ui/react";
import RichText from "../components/RichText";
import ImageWithText from "../components/ImageWithText";

const Sustainability = () => {
  return (
    <Box pb="6vh" className="SustainabilityPage">
      
      <ImageWithText
        reverse
        image="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1635274939/earthfriendcandles/SUSTAINABLITY_HANDMADE_ox4wl9.jpg"
        heading="Sustainability"
        text="         
            'To reduce the carbon footprint of your order, we will ensure that the last mile of your delivery is completed on foot, by bike or electric vehicle
    Delivered within 3-5 working days \n
    Eco deliveries take place 7 days a week
    Option will show at checkout if available to your selected post code"
      />
    </Box>
  );
};

export default Sustainability;
