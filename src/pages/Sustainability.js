import React from "react";
import { Box } from "@chakra-ui/react";
import ImageWithText from "../components/ImageWithText";
import ScrollToTop from "react-scroll-up";

const Sustainability = () => {
  return (
    <Box pb="6vh" className="SustainabilityPage">
      <ImageWithText
        reverse
        image="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1635274939/earthfriendcandles/SUSTAINABLITY_HANDMADE_ox4wl9.jpg"
        heading="Sustainability"
        text={`Vegetable-based, the wax in our soy candles comes from soybean oil, ensuring they’re free of potentially toxic chemicals such as ones found in paraffin. Producing a slow burn with no residue or sooty smokiness thanks to their cotton wicks, ECs tend to last longer too.

'Our UK soy is a naturally sourced, eco-friendly ingredient, and without the addition of synthetic chemicals, these candles are better for your lungs. And as their scent comes from essential oils, it can be a purer blend, meaning these candles deliver long-lasting fragrance.'   (The Independent)
`}
      />
      <ScrollToTop showUnder={160}>
        <div className="scrollComponent">
          <img
            className="scrollUpButton"
            alt="scrollUpButton"
            src="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1634483066/earthfriendcandles/up_arrow_round_bkgj3i.png"
          ></img>
        </div>
      </ScrollToTop>
      ;
    </Box>
  );
};

export default Sustainability;
