import { Container, Flex, Text } from "@chakra-ui/react";

const LogoTree = () => {
  return (
    <Container centerContent maxWidth="800px">
      <Text fontSize="3xl" marginBottom="30px">
        Logo Tree
      </Text>
      <Flex wrap="wrap" justifyContent="center">
        <Container
          background="#000000"
          width="200px"
          height="200px"
          margin="20px"
        />
        <Container
          background="#000000"
          width="200px"
          height="200px"
          margin="20px"
        />
        <Container
          background="#000000"
          width="200px"
          height="200px"
          margin="20px"
        />
      </Flex>
      <Flex wrap="wrap" maxWidth="800px" justifyContent="center">
        <Container
          background="#000000"
          width="200px"
          height="200px"
          margin="20px"
        />
        <Container
          background="#000000"
          width="200px"
          height="200px"
          margin="20px"
        />
        <Container
          background="#000000"
          width="200px"
          height="200px"
          margin="20px"
        />
      </Flex>
      <Flex wrap="wrap" maxWidth="800px" justifyContent="center">
        <Container
          background="#000000"
          width="200px"
          height="200px"
          margin="20px"
        />
        <Container
          background="#000000"
          width="200px"
          height="200px"
          margin="20px"
        />
        <Container
          background="#000000"
          width="200px"
          height="200px"
          margin="20px"
        />
      </Flex>
    </Container>
  );
};

export default LogoTree;
