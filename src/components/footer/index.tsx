import { Box, Button, Link, Stack, Typography } from "@mui/material";
import * as React from "react";

export type FooterItem = {
  text: string;
  link: string;
};

export type FooterSocialMediaItem = {
  icon: string;
  link: string;
};

export type FooterProps = {
  companyName: string;
  logo?: string;
  items: FooterItem[];
  socialMediaItems: FooterSocialMediaItem[];
  callToAction?: string;
};

const Footer: React.FC<FooterProps> = ({
  companyName,
  logo,
  items,
  socialMediaItems,
  callToAction,
}) => {
  return (
    <Box
      component="footer"
      className="flex flex-col items-center justify-center bg-[#292D4F] text-white py-16 px-6"
    >
      <Stack spacing={4} direction="column" className="">
        <img src={logo} alt={companyName} />
        <Box className="flex flex-col items-center justify-center">
          <Stack spacing={2} direction="row" className="">
            {socialMediaItems.map((item, index) => (
              <Link key={index} href={item.link} className="text-gray-50">
                <img src={item.icon} alt={companyName} />
              </Link>
            ))}
          </Stack>
        </Box>
        <Box className="flex flex-col items-center justify-center text-center">
          <Stack spacing={1} direction="column">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-gray-50 font-normal tracking-tight text-sm no-underline"
              >
                {item.text}
              </Link>
            ))}
          </Stack>
        </Box>
        {callToAction && (
          <Box className="flex flex-col items-center justify-center">
            <Button
              variant="contained"
              color="primary"
              className="rounded-3xl shadow-none py-2 px-8 w-fit"
            >
              {callToAction}
            </Button>
          </Box>
        )}
        <Typography
          variant="caption"
          className="text-gray-400 font-normal tracking-tight text-sm"
        >
          © 2024 {companyName}. All Rights Reserved
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
