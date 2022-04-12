import { Container, Text } from "@chakra-ui/react";
import { getHomePage } from "../../lib/api/homepage";
import Feature from "../common/feature";
import Hero from "../common/hero";
import Navbar from "../common/navbar";
import NewsletterSignup from "../common/newsletterSignup";
import SpecialFeature from "../common/specialFeature";
import Testimonial from "../common/testimonial";
import BookMeeting from "./bookMeeting";
import LogoTree from "./logoTree";

const Home = ({ homePageProps }) => {
  const hero = homePageProps.hero;
  const features = homePageProps.featuresCollection.items;
  return (
    <>
      <Navbar />
      <Hero title={hero.title} body={hero.body} />
      <Container marginTop="50px" maxW="100%">
        <LogoTree />
      </Container>

      {/* Special Features */}
      <Container maxW="100%">
        <Container marginTop="100px">
          <SpecialFeature />
        </Container>
        <Container marginTop="100px">
          <SpecialFeature />
        </Container>
        <Container marginTop="100px">
          <SpecialFeature />
        </Container>
      </Container>

      {/* Features */}
      <Container maxW="100%">
        {features.map((feature) => (
          <Container maxW="100%" marginTop="50px">
            <Feature title={feature.title} description={feature.description} />
          </Container>
        ))}
      </Container>

      {/* Testimonial */}
      <Container maxW="100%" centerContent marginTop="100px">
        <Text fontSize="3xl">Testimonial</Text>
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </Container>

      <BookMeeting />

      <NewsletterSignup />
    </>
  );
};

export default Home;
