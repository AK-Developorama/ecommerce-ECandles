import React, { useContext, useEffect, Component } from "react";
import ReactDOM, { render } from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image, Button } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";


const AllProducts = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
          <p className="legend">Legend 1</p>
        </div>
      </Carousel>
    </div>
  );
}


export default AllProducts;



/* const AllProducts = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {};
  }, [fetchAllProducts]);

  if (!products) return <div>loading...</div>;

  return (
      <Box>       
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
  );
}; */

