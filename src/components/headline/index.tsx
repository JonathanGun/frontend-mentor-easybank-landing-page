import { Box, Button, Stack, Typography } from "@mui/material";
import * as React from "react";

export type HeadlineProps = {
  title: string;
  description: string;
  heroImage: string;
  callToAction: string;
};

const Headline: React.FC<HeadlineProps> = ({
  title,
  description,
  heroImage,
  callToAction,
}) => {
  return (
    <Stack spacing={2} component="section" className="w-full h-screen">
      <img src={heroImage} alt={title} className="w-full" />
      <Stack spacing={2} className="w-full h-full p-4 items-center text-center">
        <Typography variant="h4" className="font-light">
          {title}
        </Typography>
        <Typography variant="body2" className="text-gray-400 font-medium">{description}</Typography>
        <Button variant="contained" color="primary" className="rounded-3xl shadow-none py-2 px-8">
          {callToAction}
        </Button>
      </Stack>
    </Stack>
  );
};

export default Headline;
