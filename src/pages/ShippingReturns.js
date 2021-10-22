import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Box, Grid, Text, Image, Button } from "@chakra-ui/react";
import RichText from "../components/RichText";
import ImageWithText from "../components/ImageWithText";

const ShippingReturns = () => {
  return (
    <Box pb="6vh" className="ShippingReturnsPage">
      <RichText
        secondHeadingText="We are here to help."
        secondHeadingSize="3vh"
      />

      <ImageWithText
        reverse
        image="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1633892754/earthfriendcandles/bg1_zrlcdv.jpg"
        heading="Shipping & Returns"
        text=" SHIPPING        
            'To reduce the carbon footprint of your order, we will ensure that the last mile of your delivery is completed on foot, by bike or electric vehicle
    Delivered within 3-5 working days
    Eco deliveries take place 7 days a week
    Option will show at checkout if available to your selected post code
    
    REFUND POLICY

    13. Returns
13.1 Your Statutory Right To Cancel Your Order
– 13.1.1 You have the legal right to cancel your order within 14 working days of receiving the goods.
– 13.1.2 If you wish to cancel using this right, you need to inform us in writing within 14 working days starting the day after you received the goods. You must take reasonable care of the goods and immediately return them to us in the normal way. We will not consider that you have taken reasonable care of the goods if they have been used in a way, or to an extent, beyond what would be reasonable when examining the goods in a shop before purchase.
– 13.1.3 In order for the items to be refunded or exchanged the goods must be received in an unused condition, and in original packaging.
– 13.1.4 The goods are your responsibility until they reach us. You will be liable to pay the cost of returning unwanted goods back to us. For your protection we recommend you use a postal service that insures you for the value of the goods you are returning.

Our returns address is:



– 13.1.5 Where a product is faulty, damaged or miss-described we will refund the original delivery charge and the cost of posting the goods back to us via your local postal office using first class recorded delivery only.
– 13.1.6 A proof of return and any documentation including details of any taxes paid must be obtained. You must contact earthfriendcandles@google.com to arrange your refund before returning your goods.
13.2 Sale of Goods Act 1979:
If any garment we supply fails due to a manufacturing defect, we will provide you with an appropriate remedy e.g. repair, replacement, or refund. Please email us at earthfriendcandles@google.com.
13.3 Promotional Discounts:
Where promotional discounts are applied to orders, the discount will be applied to each item in the basket. In the event of a return, you will not be refunded the discounted proportion.
    "
      />
    </Box>
  );
};

export default ShippingReturns;
