import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Menu from "../../components/Menu/Menu";
import ProjetosCarrossel from "./ProjetoCarrossel";

export default function Projetos() {
  return (
    <Flex flexDirection='column'>
      <Menu />
      <VStack spacing={10} p={8} maxW="1200px" mx="auto">
        <Heading as="h1" size="2xl" color="teal.500">
          Meus Projetos
        </Heading>

        <Box w="full" mt='3rem'>
          <ProjetosCarrossel />
        </Box>

      </VStack>
    </Flex>
  );
}
