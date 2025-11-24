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

      <Container maxW="container.lg" py={10} mt="5%">
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
            <Box
              align={{ base: "center", md: "flex-start" }}
              spacing={4}
              flex={1}
            >
              <Text fontSize="2xl" color="#ff7b00">
                Winnye Dandhara Souza
              </Text>
              <Text
                fontSize="xl"
                color="#d1c8c8"
                _dark={{ color: "gray.300" }}
              >
                Desenvolvedora Frontend há 4 anos
              </Text>
              <HStack spacing={2} pt={2}>
                <Text size="lg" bg="teal" p=".3rem" color='#d1c8c8'>
                  Javascript
                </Text>
                <Text size="lg" bg="blue" p=".3rem" color='#d1c8c8'>
                  ReactJs
                </Text>
                <Text size="lg" bg="purple" p=".3rem" color='#d1c8c8'>
                  Chakra UI
                </Text>
              </HStack>
            </Box>

            <Image
              name="Winnye Dandhara Souza"
              src="/images/winnye.jfif"
              w="200px"
              mt={{ base: 6, md: 0 }}
              ml={{ md: 10 }}
              shadow="2xl"
            />
          </Flex>

          <Box p={6} shadow="md" borderRadius="lg" bg="#0B3142">
            <Text fontSize="2xl" mb={4} color="#ff7b00">
              Minha Trajetória
            </Text>
            <Text fontSize="md" lineHeight="tall" mb={4} color="#d1c8c8">
              Programadora com conhecimento em JavaScript, React.js, HTML e CSS,
              aprimorando os conhecimentos em Next.js e Typescript. No meu
              último trabalho, aprimorei o frontend e o desempenho das
              plataformas e websites dos clientes. Busco adquirir conhecimentos
              sólidos na área, e fortalecer assim minha base técnica e
              habilidades práticas.
            </Text>
            <Text fontSize="lg" color="#ff7b00">
              Último cargo:
            </Text>
            <Box>
              <Text color="#d1c8c8">
                - Contribuí para o desenvolvimento de uma solução white-label e
                marketplaces de passagens de ônibus, trabalhando em colaboração
                com desenvolvedores seniores, designers e uma equipe de produto
                para aprimorar a experiência do usuário e a estratégia de
                produto.{" "}
              </Text>
              <Text color="#d1c8c8">
                {" "}
                - Auxiliei na expansão da plataforma desde antes do primeiro
                cliente white-label até nove clientes em apenas três meses.
                Neste período tive contato com práticas de CI/CD e git que
                permitiram esta escalada.
              </Text>
              <Text color="#d1c8c8">
                - Também aprendi boas práticas para multi-tenant, sendo
                responsável pela configuração de novos clientes na aplicação
                Next.js, que ajudei diretamente a escrever.
              </Text>
              <Text color="#d1c8c8">
                - Também tive contato com um sistema de temas personalizados
                utiliza do Mantine, entrega do um look & feel personalizado para
                cada cliente, de acordo com a respectiva identidade visual de
                cada um.
              </Text>
            </Box>
          </Box>
          <Box p={6} shadow="md" borderRadius="lg" bg="#0B3142">
            <Text fontSize="2xl" mb={4} color="#ff7b00">
              Habilidades e Foco
            </Text>
            <Flex gap={3} w="120px">
              <Text size="md" variant="solid" bg="#ff7b00" p=".3rem"  color="#d1c8c8">
                JavaScript
              </Text>
              <Text size="md" variant="solid" bg="#ff7b00" p=".3rem"  color="#d1c8c8">
                ReactJS
              </Text>
              <Text size="md" variant="solid" bg="#ff7b00" p=".3rem"  color="#d1c8c8">
                HTML
              </Text>
              <Text size="md" variant="solid" bg="#ff7b00" p=".3rem"  color="#d1c8c8">
                CSS
              </Text>
              <Text size="md" variant="solid" bg="#ff7b00" p=".3rem"  color="#d1c8c8">
                Gtthub
              </Text>
            </Flex>
          </Box>
        </VStack>
      </Container>
    </Flex>
  );
}
