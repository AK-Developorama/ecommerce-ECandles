import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import RichText from "../components/RichText";
import ImageWithText from "../components/ImageWithText";
import ScrollToTop from "react-scroll-up";

const CustomerCare = () => {
  return (
    <Box pb='6vh' className="customerCarePage">
      <RichText
        secondHeadingText="We are here to help."
        secondHeadingSize="3vh"
      />
      <Router>
        <Switch>
          <Route path="/shipping-returns">
            <ImageWithText
              reverse
              image="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1633892754/earthfriendcandles/bg1_zrlcdv.jpg"
              heading="Shipping & Returns"
              text="         
            'To reduce the carbon footprint of your order, we will ensure that the last mile of your delivery is completed on foot, by bike or electric vehicle
    Delivered within 3-5 working days
    Eco deliveries take place 7 days a week
    Option will show at checkout if available to your selected post code"
            />
          </Route>
          <Route path="/">
            <ImageWithText
              image="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1633967591/earthfriendcandles/bg3_llxjml.jpg"
              heading="Frequently Asked Questions"
              text="         MAKE A LIST HERE 
            Write from the point of view of a customer:
“Can I purchase a gift certificate?” 
instead of
“Can you purchase a gift certificate?” or “Can customers purchase gift certificates?”
3. Use a question-and-answer format: This sounds obvious…but don’t forget to write actual questions with 
          "
            />
          </Route>
          <Route path="/">
            <ImageWithText
              reverse
              image="https://res.cloudinary.com/dwtu8mm8m/image/upload/v1633967591/earthfriendcandles/bg3_llxjml.jpg"
              heading="Privacy Policy"
              text="         MAKE A LIST HERE 
            A privacy policy is a statement or legal document (in privacy law) that discloses some or all of the ways a party gathers, uses, discloses, and manages a customer or client's data.[1] Personal information can be anything that can be used to identify an individual, not limited to the person's name, address, date of birth, marital status, contact information, ID issue, and expiry date, financial records, credit information, medical history, where one travels, and intentions to acquire goods and services.
          "
            />
          </Route>
        </Switch>
      </Router>

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

export default CustomerCare;
