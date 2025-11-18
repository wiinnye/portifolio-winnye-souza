import { Flex, Image, Text, Box } from "@chakra-ui/react";
import Menu from "../components/Menu/Menu";

export default function Home() {
  return (
    <Flex w="100%" flexDirection="column">
      <Flex width="100%" height="20%">
        <Menu />
      </Flex>
      <Flex
        w="100%"
        h='100%'
        justifyContent="space-between"
        flexDirection="column"
        mt="1rem"
      >
        <Box mt={8} mb={4} mx="auto" maxW="800px">
          <Image
            src="/images/banner.png"
            alt="Foto de perfil profissional"
            width={800}
            height={400}
            objectFit="contain"
          />
        </Box>
      </Flex>
      <Flex w="100%" h='100%' flexDirection="column" alignItems="center" mt='4rem'>
        <Text fontSize="40px" fontWeight="bold" color="#000">
          Winnye Dandhara Souza
        </Text>
        <Text fontSize="25px" fontWeight="bold" color="#000" mt="1rem">
          Desenvolvedora Frontend
        </Text>
        <Text mt="1rem" alignSelf="center" color="#000">
          Programadora com conhecimento em JavaScript, React.js, HTML e CSS,
          aprimorando os conhecimentos em Next.js e Typescript.
        </Text>
      </Flex>
    </Flex>
  );
}
