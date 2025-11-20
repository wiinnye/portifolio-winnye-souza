import {
  Flex,
  Text,
  Heading,
  Container,
  Box,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";
import Menu from "../../components/Menu/Menu"; 

export default function QuemSou() {
 

  return (
    <Flex minH="100vh" bg='#fff' direction='column'>
      <Menu />

      <Container maxW="container.lg" py={10} mt='5%'>
        <VStack spacing={8} align="stretch">
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            p={6}
            shadow="xl"
            borderRadius="lg"
            bg="#0B3142"
          >
            <Box align={{ base: "center", md: "flex-start" }} spacing={4} flex={1} >
              <Text fontSize="2xl" color='#ff7b00'>
                Winnye Dandhara Souza
              </Text>
              <Text fontSize="xl" color="gray.600" _dark={{ color: "gray.300" }}>
                Desenvolvedora Frontend há 4 anos
              </Text>
              <HStack spacing={2} pt={2}>
                <Text size="lg" bg="teal" p='.3rem'>Javascript</Text>
                <Text size="lg" bg="blue" p='.3rem'>ReactJs</Text>
                <Text size="lg" bg="purple" p='.3rem'>Chakra UI</Text>
              </HStack>
            </Box>

            <Image
              name="Winnye Dandhara Souza"
              src="/images/winnye.jfif" 
              w='200px'
              mt={{ base: 6, md: 0 }}
              ml={{ md: 10 }}
              shadow="2xl"
            />
          </Flex>

          <Box p={6} shadow="md" borderRadius="lg" bg="#0B3142" >
            <Text fontSize="2xl" mb={4} color="#ff7b00">
              Minha Trajetória
            </Text>
            <Text fontSize="md" lineHeight="tall" mb={4}>
              Comecei minha jornada no desenvolvimento web há 4 anos, focando em criar experiências de usuário **acessíveis, performáticas e bonitas**. Minha paixão reside em transformar designs complexos em interfaces dinâmicas e funcionais, utilizando as melhores práticas do ecossistema **React e Next.js**.
            </Text>
            <Text fontSize="md" lineHeight="tall">
              Ao longo desses anos, trabalhei em projetos que abrangem desde landing pages otimizadas até sistemas de grande escala. Sou fascinada pela forma como o **Chakra UI** simplifica o desenvolvimento, permitindo-me focar na lógica de negócio e na experiência do usuário.
            </Text>
          </Box>
          <Box p={6} shadow="md" borderRadius="lg" bg="#0B3142" >
            <Text  fontSize="2xl" mb={4} color="#ff7b00">
              Habilidades e Foco
            </Text>
            <Flex gap={3} w='120px'>
              <Text size="md" variant="solid" bg="#ff7b00" p='.3rem'>JavaScript</Text>
              <Text size="md" variant="solid" bg="#ff7b00" p='.3rem' >ReactJS</Text>
              <Text size="md" variant="solid" bg="#ff7b00" p='.3rem'>HTML</Text>
              <Text size="md" variant="solid" bg="#ff7b00" p='.3rem'>CSS</Text>
              <Text size="md" variant="solid" bg="#ff7b00" p='.3rem'>Gtthub</Text>
            </Flex>
          </Box>

        </VStack>
      </Container>
    </Flex>
  );
}