import { HamburgerIcon } from "@chakra-ui/icons";
import { Container, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Container
      height="50px"
      maxWidth={"100%"}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text fontSize="2xl">LOGO</Text>
      <HamburgerIcon w="30px" h="30px" />
    </Container>
  );
};

export default Navbar;
