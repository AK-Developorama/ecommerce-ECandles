import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Text, Image } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";

const ProductCarousel = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {};
  }, [fetchAllProducts]);

  if (!products) return <div>loading...</div>;

  return (
    <div className="carouselDiv">
      <Carousel>
        {products.map((product) => (
          <div className="carouselSlideDiv">
            <Link to={`/products/${product.handle}`} key={product.id}>
              <Box
                className="carouselImgTextDiv"
                _hover={{ opacity: "80%" }}
                textAlign="center"
                position="relative"
              >
                <Image src={product.images[0].src} />
                <Text
                  className="productTitle"
                  py="6vh"
                  position="center"
                  w="100%"
                >
                  {product.title}
                </Text>
              </Box>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
