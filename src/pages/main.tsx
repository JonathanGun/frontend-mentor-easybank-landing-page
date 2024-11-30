import * as React from "react";
import Article, { ArticleItem } from "../components/article";
import Navbar, { NavbarItem } from "../components/navbar";
import Headline from "../components/headline";
import Benefit, { BenefitItem } from "../components/benefit";
import Footer, { FooterSocialMediaItem } from "../components/footer";
import { Box } from "@mui/material";
import heroImage from "../images/image-mockups.png";
import companyLogo from "../images/logo.svg";
import iconOnline from "../images/icon-online.svg";
import iconBudgeting from "../images/icon-budgeting.svg";
import iconOnboarding from "../images/icon-onboarding.svg";
import iconApi from "../images/icon-api.svg";
import imageCurrency from "../images/image-currency.jpg";
import imageRestaurant from "../images/image-restaurant.jpg";
import imagePlane from "../images/image-plane.jpg";
import imageConfetti from "../images/image-confetti.jpg";
import iconFacebook from "../images/icon-facebook.svg";
import iconYoutube from "../images/icon-youtube.svg";
import iconTwitter from "../images/icon-twitter.svg";
import iconPinterest from "../images/icon-pinterest.svg";
import iconInstagram from "../images/icon-instagram.svg";

type Props = {};

const MainPage: React.FC<Props> = () => {
  // NAVBAR
  const NAVBAR_LOGO = companyLogo;
  const navbarItems: NavbarItem[] = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Contact", link: "/contact" },
  ];

  // HEADLINE
  const HEADLINE_TITLE = "Next generation digital banking";
  const HEADLINE_DESCRIPTION =
    "Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.";
  const HEADLINE_HERO_IMAGE = heroImage;
  const HEADLINE_CALL_TO_ACTION = "Request Invite";

  // BENEFIT
  const BENEFIT_TITLE = "Why choose Easybank?";
  const BENEFIT_DESCRIPTION =
    "We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.";
  const benefitItems: BenefitItem[] = [
    {
      title: "Online Banking",
      description:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      icon: iconOnline,
    },
    {
      title: "Simple Budgeting",
      description:
        "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
      icon: iconBudgeting,
    },
    {
      title: "Fast Onboarding",
      description:
        "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
      icon: iconOnboarding,
    },
    {
      title: "Open API",
      description:
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
      icon: iconApi,
    },
  ];

  // ARTICLE
  const articleItems: ArticleItem[] = [
    {
      title: "Receive money in any currency with no fees",
      description:
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single",
      image: imageCurrency,
      createdAt: "2021-08-01T00:00:00.000Z",
      createdBy: "Claire Robinson",
    },
    {
      title: "Treat yourself without worrying about money",
      description:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you",
      image: imageRestaurant,
      createdAt: "2021-08-01T00:00:00.000Z",
      createdBy: "Wilson Hutton",
    },
    {
      title: "Take your Easybank card wherever you go",
      description:
        "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
      image: imagePlane,
      createdAt: "2021-08-02T00:00:00.000Z",
      createdBy: "Wilson Hutton",
    },
    {
      title: "Our invite-only Beta accounts are now live!",
      description:
        "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …",
      image: imageConfetti,
      createdAt: "2021-08-02T00:00:00.000Z",
      createdBy: "Claire Robinson",
    },
  ];

  // FOOTER
  const FOOTER_LOGO = companyLogo;
  const FOOTER_COMPANY_NAME = "Easybank";
  const footerItems = [
    { text: "About Us", link: "#" },
    { text: "Contact", link: "#" },
    { text: "Blog", link: "#" },
    { text: "Careers", link: "#" },
    { text: "Support", link: "#" },
    { text: "Privacy Policy", link: "#" },
  ];
  const footerSocialMediaItems: FooterSocialMediaItem[] = [
    { icon: iconFacebook, link: "#" },
    { icon: iconYoutube, link: "#" },
    { icon: iconTwitter, link: "#" },
    { icon: iconPinterest, link: "#" },
    { icon: iconInstagram, link: "#" },
  ];
  const FOOTER_CALL_TO_ACTION = "Request Invite";

  return (
    <Box className="min-h-screen max-w-screen">
      <Navbar items={navbarItems} logo={NAVBAR_LOGO} />
      <Headline
        title={HEADLINE_TITLE}
        description={HEADLINE_DESCRIPTION}
        heroImage={HEADLINE_HERO_IMAGE}
        callToAction={HEADLINE_CALL_TO_ACTION}
      />
      <Benefit
        title={BENEFIT_TITLE}
        description={BENEFIT_DESCRIPTION}
        items={benefitItems}
      />
      <Article items={articleItems} />
      <Footer
        companyName={FOOTER_COMPANY_NAME}
        logo={FOOTER_LOGO}
        items={footerItems}
        socialMediaItems={footerSocialMediaItems}
        callToAction={FOOTER_CALL_TO_ACTION}
      />
    </Box>
  );
};

export default MainPage;
