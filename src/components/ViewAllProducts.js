import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image, Button } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";


const ViewAllProducts = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {};
  }, [fetchAllProducts]);

  if (!products) return <div>loading...</div>;

  return (
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
    
  );
};

export default ViewAllProducts;
