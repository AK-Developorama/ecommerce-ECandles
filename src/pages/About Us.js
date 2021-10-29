import React from "react";
import { Box} from "@chakra-ui/react";
import ImageWithText from "../components/ImageWithText";

const AboutUs = () => {
  return (
    <Box pb="6vh" className="AboutUsPage">
      
      <ImageWithText
        reverse
        image="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1635276596/earthfriendcandles/about_us_abp0ao.jpg"
        heading="About Us"
        text={`We are a small business run by 2 friends outside Sheffield in UK. Very passionate about slowly replacing all our non-sustainable products with earth-friendly ones, the idea of Earthfriend Candles came to be. We are hoping to both raise awareness and with time expand our product range to various other household goods, in the hope that we make an impact on consumers' behaviour while helping the Planet we live on`}
      />
    </Box>
  );
};

export default AboutUs;
