import { Button, Container, Text } from "@chakra-ui/react";

const BookMeeting = () => {
  return (
    <Container
      height="500px"
      maxW="100%"
      background="#E5E5E5"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="3xl">Book a meeting</Text>
      <Button
        background="#000000"
        color="#ffffff"
        height="75px"
        width="300px"
        fontSize="xl"
        marginTop="30px"
      >
        Book now
      </Button>
    </Container>
  );
};

export default BookMeeting;
