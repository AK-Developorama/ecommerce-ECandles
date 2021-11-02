import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";
import RichText from "../components/RichText";
import ScrollToTop from "react-scroll-up";
import ProductCarousel from "../components/ProductCarousel";


const AllProductsCatalogue = () => {
  const { fetchAllProducts, products} = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {};
  }, [fetchAllProducts]);

  if (!products) return <div>ONE MOMENT PLEASE...</div>;

  return (
    <div className="allProductsCatalogueDiv">
      <Box>
        <RichText
          heading="EARTHFRIEND CANDLES"
          headingSize="1.7em"
          secondHeadingText="Explore our stunning range of non-toxic candles."
          secondHeadingSize="1.2em"
        />


        <ProductCarousel/>

        <Grid
          className="allProductsGrid"
          templateColumns={["repeat(1fr)", "repeat(4, 1fr)"]}
        >
          {products.map((product) => (
            <Link to={`/products/${product.handle}`} key={product.id}>
              <Box
                className="indivProductDiv"
                _hover={{ opacity: "80%" }}
                textAlign="center"
                position="relative"
              >
                <Image src={product.images[0].src} w="100%" />
                <Text
                  className="productTitle"
                  py="7vh"
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
