import { Button, Container, Input, Text } from "@chakra-ui/react";

const NewsletterSignup = () => {
  return (
    <Container centerContent marginTop="100px">
      <Text fontSize="3xl">Newsletter Signup</Text>
      <Input
        margin="20px"
        height="50px"
        width="500px"
        borderColor="#000"
        borderRadius="0"
      ></Input>
      <Button
        color="#000000"
        background="#ffffff"
        borderColor="#000000"
        border="1px"
        width="200px"
        height="50px"
      >
        Submit
      </Button>
    </Container>
  );
};

export default NewsletterSignup;
