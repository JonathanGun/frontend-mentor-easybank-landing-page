import { Box, Card, Stack, Typography } from "@mui/material";
import * as React from "react";
import Section from "../Section";

export type ArticleItem = {
  title: string;
  description: string;
  image: string;
  createdAt?: string;
  createdBy?: string;
};

export type ArticleProps = {
  title?: string;
  items: ArticleItem[];
};

const Article: React.FC<ArticleProps> = ({ items }) => {
  return (
    <Section className="bg-[#FBFBFB]">
      <Stack
        spacing={4}
        direction={{ xs: "column", md: "row" }}
        useFlexGap
        sx={{ flexWrap: "wrap" }}
      >
        <Typography
          variant="h4"
          className="font-light text-center md:text-left"
        >
          Latest Articles
        </Typography>
        {items.map((item, index) => (
          <Card key={index} className="w-full shadow-sm shadow-slate-100" elevation={0}>
            <Stack key={index} spacing={0} className="flex flex-col">
              <img src={item.image} alt={item.title} />
              <Stack spacing={1} className="flex flex-col p-6">
                <Typography variant="caption" className="text-gray-400 font-medium text-[10px]">
                  By {item.createdBy}
                </Typography>
                <Typography variant="body1" className="leading-5 tracking-tight text-gray-700">
                  {item.title}
                </Typography>
                <Typography variant="body2" className="text-xs text-gray-400">
                  {item.description}
                </Typography>
              </Stack>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Section>
  );
};

export default Article;
