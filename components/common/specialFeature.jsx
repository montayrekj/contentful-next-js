import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Container, Text } from "@chakra-ui/react";

const SpecialFeature = () => {
  return (
    <Container width="100%" centerContent>
      <Container
        background="#000000"
        width="500px"
        height="500px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          background="#ffffff"
          width="100px"
          height="100px"
          borderRadius="10px"
        />
      </Container>

      <Container width="500px">
        <Text fontSize="xl" marginTop="20px">
          Special Feature
        </Text>
        <Text fontSize="l" marginTop="50px">
          See More <ArrowForwardIcon />
        </Text>
      </Container>
    </Container>
  );
};

export default SpecialFeature;
