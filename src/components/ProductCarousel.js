import React, { useContext, useEffect, Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ViewAllProducts from "../components/ViewAllProducts";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";

const ProductCarousel = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {};
  }, [fetchAllProducts]);

  if (!products) return <div>loading...</div>;

  return (
    <div>
      <Carousel>
        {products.map((product) => (
          <div>
            <Link to={`/products/${product.handle}`} key={product.id}>
              <Box
                _hover={{ opacity: "80%" }}
                textAlign="center"
                position="relative"
              >
                <Image src={product.images[0].src} />
                <Text
                  className="productTitle"
                  py="6vh"
                  fontWeight="bold"
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
      <Router>
        <Switch>
          <Route path="/allproducts">
            <ViewAllProducts />
          </Route>
          <Route>
            <Box
              pb="6vh"
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
            >
              <Link to="/allproducts" >
                <Button w="10rem" color="white" _hover={{ opacity: "70%" }}>
                  View All
                </Button>
              </Link>
            </Box>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default ProductCarousel;
