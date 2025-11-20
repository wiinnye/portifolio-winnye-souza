import { Box, Flex, Heading } from "@chakra-ui/react";
import Menu from "../../components/Menu/Menu";
import ProjetosCarrossel from "./ProjetoCarrossel";

export default function Projetos() {
  return (
    <Flex h="100vh" flexDirection="column" alignItems="center" bg="#fff">
      <Menu />
      <Flex 
      direction='column' 
      align='center' 
      justify='center'
      p={8}
      maxW="1200px"
      h='100%'
      mx="auto"
      >
        <Heading as="h1" size="2xl" color="#ff7b00">
          Meus Projetos
        </Heading>
        <Box w="full" h='100%' mt="15%">
          <ProjetosCarrossel />
        </Box>
      </Flex>
    </Flex>
  );
}
