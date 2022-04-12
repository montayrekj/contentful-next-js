import { Box, Container, Text } from "@chakra-ui/react";

const Feature = ({ title, description }) => {
  return (
    <Container padding="50px" margin="0" maxW="100%">
      <Box background="#000000" width="150px" height="150px" />
      <Text fontSize="2xl" marginTop="10px" marginBottom="10px">
        {title}
      </Text>
      <Text>{description}</Text>
    </Container>
  );
};

export default Feature;
