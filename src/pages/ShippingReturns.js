import React from "react";
import { Box, Image, Flex, Text } from "@chakra-ui/react";
import RichText from "../components/RichText";
import ScrollToTop from "react-scroll-up";


const ShippingReturns = () => {
  return (
    <Box pb="6vh" w="100%" className="ShippingReturnsDiv">
      <RichText
        secondHeadingText=" Shipping and Returns"
        secondHeadingSize="3vh"
      />

      <Flex className="shippingTextDiv" pt="6vh" w="100%" flexDirection="row">
        <Box className="shippingTextDiv" w="50%" px="2rem">
          <Text>
            {`UK REGULAR ORDERS
    
    Delivered within 3-5 working days.

UK ECO DELIVERIES

7 days a week. Delivered within 3-5 working days.

 To reduce the carbon footprint of your order, we will ensure that the last mile of your delivery is completed on foot, by bike or electric vehicle

    Option will show at checkout if available to your selected post code. 

    Sorry we do not ship outside the UK at the moment.
    
    REFUND POLICY

13.1 Your Statutory Right To Cancel Your Order
13.1.1 You have the legal right to cancel your order within 14 working days of receiving the goods.
13.1.2 If you wish to cancel using this right, you need to inform us in writing within 14 working days starting the day after you received the goods. You must take reasonable care of the goods and immediately return them to us in the normal way. We will not consider that you have taken reasonable care of the goods if they have been used in a way, or to an extent, beyond what would be reasonable when examining the goods in a shop before purchase.
13.1.3 In order for the items to be refunded or exchanged the goods must be received in an unused condition, and in original packaging.
13.1.4 The goods are your responsibility until they reach us. You will be liable to pay the cost of returning unwanted goods back to us. For your protection we recommend you use a postal service that insures you for the value of the goods you are returning.

Our returns address is:

13.1.5 Where a product is faulty, damaged or miss-described we will refund the original delivery charge and the cost of posting the goods back to us via your local postal office using first class recorded delivery only.
13.1.6 A proof of return and any documentation including details of any taxes paid must be obtained. You must contact earthfriendcandles@google.com to arrange your refund before returning your goods.
13.2 Sale of Goods Act 1979:
If any garment we supply fails due to a manufacturing defect, we will provide you with an appropriate remedy e.g. repair, replacement, or refund. Please email us at earthfriendcandles@google.com.

13.3 Promotional Discounts:
Where promotional discounts are applied to orders, the discount will be applied to each item in the basket. In the event of a return, you will not be refunded the discounted proportion.
    `}
          </Text>
        </Box>
        <Box
          className="shippingImgDiv"
          w="50%"
          display="flex"
          flexDir="column"
          justifyContent="top"
          alignItems="right"
        >
          <Image
            alt="image of shipping parcels"
            className="shippingImg"
            src="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1635276592/earthfriendcandles/shipping_paixqx.jpg"
          />
        </Box>
      </Flex>
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

export default ShippingReturns;
