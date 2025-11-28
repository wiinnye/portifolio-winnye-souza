"use client";
import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import ContatoLink from "../../components/Contato/page";
import Menu from "../../components/Menu/Menu";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Contato() {
  return (
    <Flex
      w="100%"
      h="100vh"
      flexDirection="column"
      align="center"
      justify="center"
      bg="#fff"
    >
      <Menu />
      <VStack spacing={4} mb={8} textAlign="center" mt="5rem">
        <Heading as="h1" size={{ base: "2xl", md: "4xl" }} color="#40c0cb">
          Vamos Conversar!
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl" }} color="gray.500" maxW="600px">
          Estou sempre aberta a novas oportunidades e projetos.
        </Text>
        <Text fontSize={{ base: "lg", md: "xl" }} color="gray.500" maxW="600px">
          Entre em contato através dos links abaixo:
        </Text>
      </VStack>

      <Flex 
      w="100%"
      h='50%'
      justifyContent='space-around'
      align='center'
      flexDirection={{base:'column', md: 'row'}}
      
      >
        <Flex align="center" justifyItems="center">
          <ContatoLink
            href="https://www.linkedin.com/in/winnye-dandhara-souza/"
            icon={FaLinkedinIn}
            label="Meu LinkedIn"
          />
        </Flex>

        <Flex align="center" justifyItems="center" >
          <ContatoLink
            href="https://github.com/wiinnye"
            icon={FaGithub}
            label="Meu GitHub"
          />
        </Flex>

        <Flex align="center" justifyItems="center">
          <ContatoLink
            href="mailto:wiinnye@gmail.com"
            icon={FaEnvelope}
            label="Enviar E-mail"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
