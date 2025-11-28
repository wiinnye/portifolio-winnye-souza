import {
  Flex,
  Text,
  Container,
  Box,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";
import Menu from "../../components/Menu/Menu";

export default function QuemSou() {
  return (
    <Flex minH="100vh" bg="#fff" direction="column">
      <Menu />

      <Container maxW="container.lg" py={10} mt={{base:"12%", md:"5%"}}>
        <VStack spacing={8} align="stretch">
          <Flex
            w='100%'
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            p={4}
            shadow="xl"
            borderRadius="lg"
            borderColor="#b5d7e7"
            mt=".5rem"
          >
            <Flex
              align={{ base: "center", md: "flex-start" }}
              spacing={4}
              h='200px'
              flex={1}
              flexDirection="column"
              justifySelf="space-between"
            >
              
              <Text fontSize="4xl" color="#40c0cb" alignSelf={{ base: "center", md: "flex-start" }} mb='1rem'>
                Winnye Dandhara Souza
              </Text>
              <Text fontSize="xl" color="#918787" _dark={{ color: "gray.300" }} alignSelf={{ base: "center", md: "flex-start" }} mb='1rem'>
                Desenvolvedora Frontend
              </Text>
              <Text fontSize="xl" color="#918787" _dark={{ color: "gray.300" }} alignSelf={{ base: "center", md: "flex-start" }} mb='1rem'>
                Técnico de Análise e Desenvolvimento de Sistemas
              </Text>
              
              <HStack spacing={2} pt={2} mb='1rem'>
                <Text
                  size="lg"
                  bg="#40c0cb"
                  p=".3rem"
                  color="#fff"
                  transition="all 0.3s ease-in-out"
                  _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}
                >
                  Javascript
                </Text>
                <Text
                  size="lg"
                  bg="#40c0cb"
                  p=".3rem"
                  color="#fff"
                  transition="all 0.3s ease-in-out"
                  _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}
                >
                  ReactJs
                </Text>
                <Text
                  size="lg"
                  bg="#40c0cb"
                  p=".3rem"
                  color="#fff"
                  transition="all 0.3s ease-in-out"
                  _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}
                >
                  Chakra UI
                </Text>
              </HStack>
            </Flex>
            <Flex w='200px' h='200px'>
              <Image
                name="Winnye Dandhara Souza"
                src="/images/winnye.jfif"
                w="250px"
                mt={{ base: 6, md: 0 }}
                shadow="xl"
              />
            </Flex>
          </Flex>

          <Flex
            align={{ base: "center", md: "flex-start" }}
            shadow="xl"
            borderRadius="lg"
            p={4}
            borderColor="#b5d7e7"
            mt=".5rem"
            flexDirection="column"
          >
            <Text fontSize="4xl" mb={4} color="#40c0cb">
              Minha Trajetória
            </Text>
            <Text fontSize="xl" lineHeight="tall" mb={4} color="#918787">
              Programadora com conhecimento em JavaScript, React.js, HTML e CSS,
              aprimorando os conhecimentos em Next.js e Typescript. No meu
              último trabalho, aprimorei o frontend e o desempenho das
              plataformas e websites dos clientes. Busco adquirir conhecimentos
              sólidos na área, e fortalecer assim minha base técnica e
              habilidades práticas.
            </Text>
            <Text fontSize="4xl" color="#40c0cb">
              Último Cargo:
            </Text>
            <Box>
              <Text color="#918787" fontSize="xl">
                - Contribuí para o desenvolvimento de uma solução white-label e
                marketplaces de passagens de ônibus, trabalhando em colaboração
                com desenvolvedores seniores, designers e uma equipe de produto
                para aprimorar a experiência do usuário e a estratégia de
                produto.{" "}
              </Text>
              <Text color="#918787" fontSize="xl">
                {" "}
                - Auxiliei na expansão da plataforma desde antes do primeiro
                cliente white-label até nove clientes em apenas três meses.
                Neste período tive contato com práticas de CI/CD e git que
                permitiram esta escalada.
              </Text>
              <Text color="#918787" fontSize="xl">
                - Também aprendi boas práticas para multi-tenant, sendo
                responsável pela configuração de novos clientes na aplicação
                Next.js, que ajudei diretamente a escrever.
              </Text>
              <Text color="#918787" fontSize="xl">
                - Também tive contato com um sistema de temas personalizados
                utiliza do Mantine, entrega do um look & feel personalizado para
                cada cliente, de acordo com a respectiva identidade visual de
                cada um.
              </Text>
            </Box>
          </Flex>

          <Flex
            align={{ base: "center", md: "flex-start" }}
            p={4}
            shadow="xl"
            borderRadius="lg"
            borderColor="#b5d7e7"
            mt=".5rem"
            flexDirection="column"
          >
            <Text fontSize="4xl" mb={4} color="#40c0cb">
              Habilidades e Foco
            </Text>
            <Flex gap={3} w={{md:"120px"}}>
              <Text
                size="md"
                variant="solid"
                bg="#00a8c6"
                p=".3rem"
                color="#fff"
                transition="all 0.3s ease-in-out"
                _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}
              >
                JavaScript
              </Text>
              <Text
                size="md"
                variant="solid"
                bg="#00a8c6"
                p=".3rem"
                color="#fff"
                transition="all 0.3s ease-in-out"
                _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}
              >
                ReactJS
              </Text>
              <Text
                size="md"
                variant="solid"
                bg="#00a8c6"
                p=".3rem"
                color="#fff"
                transition="all 0.3s ease-in-out"
                _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}
              >
                HTML
              </Text>
              <Text
                size="md"
                variant="solid"
                bg="#00a8c6"
                p=".3rem"
                color="#fff"
                transition="all 0.3s ease-in-out"
                _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}
              >
                CSS
              </Text>
              <Text
                size="md"
                variant="solid"
                bg="#00a8c6"
                p=".3rem"
                color="#fff"
                transition="all 0.3s ease-in-out"
                _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}
              >
                Gtthub
              </Text>
            </Flex>
          </Flex>
        </VStack>
      </Container>
    </Flex>
  );
}
