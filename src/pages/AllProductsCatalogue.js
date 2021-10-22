import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image, Button } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";
import RichText from "../components/RichText";
import ProductCarousel from "../components/ProductCarousel";
import ScrollToTop from "react-scroll-up";

const AllProductsCatalogue = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {};
  }, [fetchAllProducts]);

  if (!products) return <div>loading...</div>;

  return (
    <div className="allProductsCatalogueDiv">
      <Box p="2rem">
        <Grid py={"16vh"} templateColumns={["repeat(1fr)", "repeat(3, 1fr)"]}>
          {products.map((product) => (
            <Link to={`/products/${product.handle}`} key={product.id}>
              <Box
                _hover={{ opacity: "80%" }}
                textAlign="center"
                position="relative"
              >
                <Image src={product.images[0].src} w="50%" />
                <Text
                  fontTransform="uppercase"
                  fontWeight="bold"
                  position="center"
                  w="100%"
                >
                  {product.title}
                </Text>
              </Box>
            </Link>
          ))}
        </Grid>

        <ProductCarousel />
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
    </div>
  );
};

export default AllProductsCatalogue;
