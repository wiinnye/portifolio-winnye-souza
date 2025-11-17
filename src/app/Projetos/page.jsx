import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Menu from "../../components/Menu/Menu";
import ProjetosCarrossel from "./ProjetoCarrossel";

export default function Projetos() {
  return (
    <Flex h="100vh" flexDirection="column" alignItems="center" bg="#fff">
      <Menu />
      <VStack spacing={10} p={8} maxW="1200px" mx="auto">
        <Heading as="h1" size="2xl" color="#ff7b00">
          Meus Projetos
        </Heading>

        <Box w="full" mt="3rem">
          <ProjetosCarrossel />
        </Box>
      </VStack>
    </Flex>
  );
}
