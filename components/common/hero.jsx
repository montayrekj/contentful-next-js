import { background, Container, Text } from "@chakra-ui/react";

const Hero = ({ centered = false, title, body }) => {
  return (
    <Container
      maxWidth="100%"
      minHeight="400px"
      background="#E5E5E5"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      padding="50px"
      centerContent={centered}
    >
      <Text fontSize="6xl" align={centered ? "center" : "left"}>
        {title}
      </Text>
      <Text fontSize="xl" align={centered ? "center" : "left"}>
        {body}
      </Text>
    </Container>
  );
};

export default Hero;
