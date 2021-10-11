import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image, Button } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";
import Hero from "../components/Hero";
import RichText from "../components/RichText";
import ImageWithText from "../components/ImageWithText";

const HomePage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {};
  }, [fetchAllProducts]);

  if (!products) return <div>loading...</div>;

  return (
    <>
      <Hero />
      <Box>
        <Box
          h="10vh"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          borderBottom="0.25pt white solid"
          position="center"
        ></Box>
        <RichText
          secondHeadingText="The sustainable candles you’ve been waiting for."
          secondHeadingSize="3vh"
          text="Made from 88% farm-grown Yorkshire soy + 12% UK beeswax"
          textSize="2.5vh"
        />

        <Box
          h="10vh"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          borderBottom="0.25pt white solid"
          position="center"
        >
          <Button
            w="10rem"
            color="white"
            _hover={{ opacity: "70%" }}
            position="center"
          >
            Shop Now
          </Button>
        </Box>

        <ImageWithText
          button
          image="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1633892754/earthfriendcandles/bg1_zrlcdv.jpg"
          heading="5456554"
          text="         
            'Most candles are made from paraffin wax, a petroleum by-product of crude oil, and emit large amounts of particulate pollution when burned — a major ingredient in air pollution. Add in metal-based wicks, artificial scents and boosters, and the notion of candle purity goes up in flames.' (The Guardian)

            And remember our soy wax candles tend to burn for 50% longer than parrafin ones!
          
          "

          //https://www.theguardian.com/environment/2011/nov/27/lucy-siegle-candle-wax-ethical
        />
        <ImageWithText
          reverse
          button
          image="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1633431973/earthfriendcandles/bg_cropped_cyoj0o.jpg"
          heading="5456554"
          text="         
            'Most candles are made from paraffin wax, a petroleum by-product of crude oil, and emit large amounts of particulate pollution when burned — a major ingredient in air pollution. Add in metal-based wicks, artificial scents and boosters, and the notion of candle purity goes up in flames.' (The Guardian)

            And remember our soy wax candles tend to burn for 50% longer than parrafin ones!
          
          "

          //https://www.theguardian.com/environment/2011/nov/27/lucy-siegle-candle-wax-ethical
        />
        <Grid p={"8vh"} templateColumns={["repeat(1fr)", "repeat(3, 1fr)"]}>
          {products.map((product) => (
            <Link to={`/products/${product.handle}`} key={product.id}>
              <Box
                _hover={{ opacity: "80%" }}
                textAlign="center"
                position="relative"
              >
                <Image src={product.images[0].src} w="50%" />
                <Text fontWeight="bold" position="center" w="100%">
                  {product.title}
                </Text>
                <Text w="100%">${product.variants[0].price}</Text>
              </Box>
            </Link>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
