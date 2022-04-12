import { Container, Text, Circle } from "@chakra-ui/react";

const Testimonial = () => {
  return (
    <Container
      display="flex"
      flexDirection="row"
      maxW="100%"
      justifyContent="flex-start"
      padding="50px"
    >
      <Circle width="150px" height="150px" background="#000000"></Circle>
      <Container display="flex" flexDirection="column" maxW="100%">
        <Text fontSize="xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          aliquet ac dolor vitae sodales. Nunc interdum euismod sagittis. Morbi
          molestie bibendum purus. Mauris dignissim diam mi, in feugiat augue
          semper et. Maecenas commodo magna augue, vel rhoncus enim bibendum eu.
          Etiam dictum egestas euismod. Sed commodo libero et lorem porta, ac
          porta justo blandit. Aenean aliquet condimentum felis molestie
          commodo. Phasellus porttitor interdum ornare.
        </Text>
        <Text fontSize="l">Name Title Company</Text>
      </Container>
    </Container>
  );
};

export default Testimonial;
