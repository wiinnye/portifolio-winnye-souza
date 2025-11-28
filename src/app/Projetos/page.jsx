import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Menu from "../../components/Menu/Menu";
import ProjetosCarrossel from "./ProjetoCarrossel";

export default function Projetos() {
  return (
    <Flex minH="100vh" bg="#fff" direction="column">
      <Menu />
      <Container maxW="container.lg" py={10} mt={{base:"12%", md:"5%"}}>
        <Flex
          direction="column"
          align="center"
          justify="center"
          p={8}
          maxW="1200px"
          h="100%"
          mx="auto"
        >
          <Text fontSize="4xl" color="#40c0cb">
            Meus Projetos
          </Text>
          <Box w="full" h="100%" mt="5%">
            <ProjetosCarrossel />
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
}
