import {
  AppBar,
  Box,
  Container,
  IconButton,
  Link,
  Toolbar,
} from "@mui/material";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";

export type NavbarItem = {
  text: string;
  link: string;
};

export type NavbarProps = {
  logo?: string;
  items: NavbarItem[];
};

const Navbar: React.FC<NavbarProps> = ({ logo, items }) => {
  return (
    <AppBar position="static" className="bg-white shadow-md">
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense" className="justify-between">
          <Box component="img" src={logo} alt="logo" className="h-full" />
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              size="large"
              edge="start"
              color="default"
              aria-label="menu"
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: { xs: "none", md: "block" },
              }}
            >
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="text-gray-500 hover:text-gray-900 px-4"
                >
                  {item.text}
                </Link>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
