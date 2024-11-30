import { Box, Stack, Typography } from "@mui/material";
import * as React from "react";
import Section from "../Section";

export type BenefitItem = {
  title: string;
  description: string;
  icon: string;
};

export type BenefitProps = {
  title: string;
  description: string;
  items: BenefitItem[];
};

const Benefit: React.FC<BenefitProps> = ({ title, description, items }) => {
  return (
    <Section className="bg-gray-50">
      <Stack spacing={8} direction="column">
        <Stack spacing={2} className="text-center md:text-left">
          <Typography variant="h5" className="font-light px-12">
            {title}
          </Typography>
          <Typography variant="body2" className="text-gray-400 font-medium">
            {description}
          </Typography>
        </Stack>
        <Stack spacing={4} direction={{ xs: "column", md: "row" }}>
          {items.map((item, index) => (
            <Stack
              key={index}
              spacing={2}
              className="flex flex-col items-center justify-center text-center md:text-left"
            >
              <img src={item.icon} alt={item.title} />
              <Typography variant="h6" className="text-gray-600 font-normal">
                {item.title}
              </Typography>
              <Typography variant="body2" className="text-gray-400 font-medium">
                {item.description}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Section>
  );
};

export default Benefit;
