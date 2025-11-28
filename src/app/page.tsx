"use client";
import { Flex, Text, Container, VStack } from "@chakra-ui/react";
import Menu from "../components/Menu/Menu";

export default function Home() {
  return (
    <Flex w="100%" minH="100vh" flexDirection="column">
      <Menu />

      <Container
        maxW="container.lg"
        minH='500px'
        py={10}
        mt={{ base: "21%", md: "10%" }}
        bg="#40c0cb"
      >
        <VStack align="stretch">
          <Flex
            wrap="wrap"
            w="100%"
            h="100%"
            flexDirection="column"
            align="center"
            justify="center"
            mt={{ base: "150px", md: "7%" }}
            p={{ md: "3rem" }}
          >
            <Text
              fontSize={{ base: "30px", md: "60px" }}
              fontWeight="bold"
              color="#fff"
              pl="1rem"
            >
              Winnye Dandhara Souza
            </Text>
            <Text
              fontSize={{ base: "20px", md: "30px" }}
              fontWeight="bold"
              color="#000"
              mt="1rem"
            >
              Desenvolvedora Frontend
            </Text>
          </Flex>
        </VStack>
      </Container>
    </Flex>
  );
}
