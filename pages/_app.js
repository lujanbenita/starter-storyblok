import "../styles/tailwind.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Title from "../components/Title";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  title: Title,
};

storyblokInit({
  // accessToken: "d6IKUtAUDiKyAhpJtrLFcwtt",
  accessToken: "udKhUdniurvOUNdWkebnNAtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
