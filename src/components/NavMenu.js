import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import RichText from "../components/RichText";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";


const NavMenu = () => {
  const { isMenuOpen, closeMenu } = useContext(ShopContext);
  const [open, setOpen] = React.useState(true);

  return (
    <Drawer
      className="navMenuDiv"
      isOpen={isMenuOpen}
      onClose={closeMenu}
      placement="left"
      size="xs"
    >
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <Box sx={{ display: "flex" }}>
            <ThemeProvider
              theme={createTheme({
                components: {
                  MuiListItemButton: {
                    defaultProps: {
                      disableTouchRipple: true,
                    },
                  },
                },
              })}
            >
              <Paper elevation={0} sx={{ maxWidth: 256 }}>
                {/* TITLE */}
                <Link to="/">
                  <RichText heading="EARTHFRIEND CANDLES" headingSize="2.7vh" />
                </Link>

                {/* OUR PRODUCTS */}
                <ListItemButton
                  alignItems="flex-start"
                  sx={{
                    pt: 2.5,
                    pb: 2.5,
                  }}
                >
                  <Link to="/products-catalogue">
                    <ListItemText primary="OUR PRODUCTS" sx={{ my: 2 }} />
                  </Link>
                </ListItemButton>

                {/* COMPANY */}

                <ListItemButton
                  alignItems="flex-start"
                  onClick={() => setOpen(!open)}
                  sx={{
                    pt: 2.5,
                    pb: 2.5,
                    "&:hover, &:focus": {
                      "& svg": { opacity: open ? 1 : 0 },
                    },
                  }}
                >
                  <ListItemText
                    primary="COMPANY"
                    secondary=""
                    secondaryTypographyProps={{
                      noWrap: true,
                      color: open
                        ? "rgba(136,136,136,1)"
                        : "rgba(255,255,255,1)",
                    }}
                    sx={{ my: 2 }}
                  />

                  <KeyboardArrowDown
                    sx={{
                      ml: 1,
                      my: 1.5,
                      opacity: 1,
                      transform: open ? "rotate(-180deg)" : "rotate(0)",
                      transition: "0.2s",
                    }}
                  />
                </ListItemButton>
                {open && (
                  <Box>
                    {/* About Us  */}
                    <ListItemButton
                      alignItems="flex-start"
                      sx={{
                        pt: 0,
                        pb: 0.2,
                      }}
                    >
                      <Link to="/about-us">
                        <ListItemText primary="About Us" sx={{ my: 2 }} />
                      </Link>
                    </ListItemButton>
                    {/* Sustainability*/}
                    <ListItemButton
                      alignItems="flex-start"
                      sx={{
                        pt: 0,
                        pb: 0.2,
                      }}
                    >
                      <Link to="/sustainability">
                        <ListItemText primary="Sustainability" sx={{ my: 2 }} />
                      </Link>
                    </ListItemButton>
                    {/* Contact*/}
                    <ListItemButton
                      alignItems="flex-start"
                      sx={{
                        pt: 0,
                        pb: 0.2,
                      }}
                    >
                      <Link to="/contact">
                        <ListItemText primary="Contact" sx={{ my: 2 }} />
                      </Link>
                    </ListItemButton>

                    {/*Shipping & Returns */}
                    <ListItemButton
                      alignItems="flex-start"
                      sx={{
                        pt: 0,
                        pb: 0.2,
                      }}
                    >
                      <Link to="/shipping-returns">
                        <ListItemText
                          primary="Shipping & Returns"
                          sx={{ my: 2 }}
                        />
                      </Link>
                    </ListItemButton>

                    {/* Privacy Policy*/}
                    <ListItemButton
                      alignItems="flex-start"
                      sx={{
                        pt: 0,
                        pb: 0.2,
                      }}
                    >
                      <Link to="/privacy-policy">
                        <ListItemText primary="Privacy Policy" sx={{ my: 2 }} />
                      </Link>
                    </ListItemButton>
                  </Box>
                )}

              </Paper>
            </ThemeProvider>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default NavMenu;
