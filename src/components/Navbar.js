import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { Badge, Box, Icon, Image } from "@chakra-ui/react"
import { MdShoppingBasket, MdDehaze } from "react-icons/md";


const Navbar = () => {

  const { openCart, openMenu, checkout } = useContext(ShopContext)

  return (
    <Box
      borderBottom="0.25pt white solid"
      backgroundColor="whitesmoke"
      display="flex"
      flexDir="row"
      p="2vh"
      justifyContent="space-between"
      alignItems="center"
    >
      <Icon
        _hover={{ opacity: "70%" }}
        cursor="pointer"
        onClick={() => openMenu()}
        as={MdDehaze}
        w={35}
        h={35}
      ></Icon>
      <Link to="/">
        <Image
          _hover={{ opacity: "70%" }}
          src="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1633450252/earthfriendcandles/android-chrome-512x512_qgmxhk.png"
          w={"6vh"}
        />
      </Link>
      <Box>
        <Icon
          _hover={{ opacity: "70%" }}
          cursor="pointer"
          onClick={() => openCart()}
          as={MdShoppingBasket}
          w={30}
          h={30}
        ></Icon>
        <Badge backgroundColor="#eeddd0" borderRadius="50%">
          {checkout?.lineItems?.length}
        </Badge>
      </Box>
    </Box>
  );
}

export default Navbar
