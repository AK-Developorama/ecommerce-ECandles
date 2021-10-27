import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";
import Hero from "../components/Hero";
import RichText from "../components/RichText";
import ImageWithText from "../components/ImageWithText";
import ProductCarousel from "../components/ProductCarousel";
import ScrollToTop from "react-scroll-up";

const HomePage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {};
  }, [fetchAllProducts]);

  if (!products) return <div>loading...</div>;

  return (
    <Box className="homePage">
      <Hero />
      <RichText
        secondHeadingText="The sustainable candles you’ve been waiting for."
        secondHeadingSize="1.3em"
        text="Made from 88% farm-grown Yorkshire soy + 12% UK beeswax"
      />
      <Box
        className="shopButtonDiv"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        position="center"
      >
        <Link to="/products-catalogue">
          <Button
            className="shopButton"
            w="10rem"
            color="white"
            _hover={{ opacity: "70%" }}
            position="center"
          >
            Shop Now
          </Button>
        </Link>
      </Box>
      <ImageWithText
        image="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1633892754/earthfriendcandles/bg1_zrlcdv.jpg"
        heading="Why Soy Candles?"
        text="         
            'Most candles are made from paraffin wax, a petroleum by-product of crude oil, and emit large amounts of particulate pollution when burned — a major ingredient in air pollution. Add in metal-based wicks, artificial scents and boosters, and the notion of candle purity goes up in flames.' (The Guardian)

            And remember our soy wax candles tend to burn for 50% longer than parrafin ones!
          
          "

        //https://www.theguardian.com/environment/2011/nov/27/lucy-siegle-candle-wax-ethical
      />
      <ImageWithText
        reverse
        button
        buttonAddress="sustainability"
        image="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1633967591/earthfriendcandles/bg3_llxjml.jpg"
        heading="How Are We different..."
        text="         
            'Our non-toxic soy candles are created without any synthetics, making for a cleaner flame and more transparent ingredients list.
Vegetable-based, the wax in soy candles comes from soybean oil, ensuring they’re free of potentially toxic chemicals such as ones found in paraffin. Producing a slow burn with no residue or sooty smokiness thanks to their cotton wicks, these natural candles tend to last longer too' (The Guardian)
            And remember our soy wax candles tend to burn for 50% longer than parrafin ones!
          
          "

        //https://www.theguardian.com/environment/2011/nov/27/lucy-siegle-candle-wax-ethical
      />
      <ProductCarousel />
      <Box
        pb="6vh"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Link to="/products-catalogue">
          <Button w="10rem" color="white" _hover={{ opacity: "70%" }}>
            View All
          </Button>
        </Link>
      </Box>

      <ScrollToTop showUnder={160}>
        <div className="scrollComponent">
          <img
            className="scrollUpButton"
            alt="scrollUpButton"
            src="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1634483066/earthfriendcandles/up_arrow_round_bkgj3i.png"
          ></img>
        </div>
      </ScrollToTop>
    </Box>
  );
};

export default HomePage;
