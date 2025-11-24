"use client";
import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import ContatoLink from "../../components/Contato/page"; 
import Menu from "../../components/Menu/Menu";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Contato() {
  return (
    <Flex 
      h='100vh'
      flexDirection="column" 
      alignItems="center" 
      bg="#fff" 
    >
      <Menu/>
      <VStack spacing={4} mb={10} textAlign="center" mt='5rem'>
        <Heading as="h1" size={{ base: "xl", md: "2xl" }} color="#ff7b00">
          Vamos Conversar!
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl" }} color="gray.500" maxW="600px">
          Estou sempre aberta a novas oportunidades e projetos.
        </Text>
          <Text fontSize={{ base: "lg", md: "xl" }} color="gray.500" maxW="600px">
          Entre em contato através dos links abaixo:
        </Text>
      </VStack>

      <VStack 
        spacing={6} 
        w={{ base: "full", md: "60%" }}
        maxW="400px"
        mt='5rem'
      >
        <ContatoLink
          href="https://www.linkedin.com/in/winnye-dandhara-souza/"
          icon={FaLinkedinIn}
          label="Meu LinkedIn"
        />

        <ContatoLink
          href="https://github.com/wiinnye"
          icon={FaGithub}
          label="Meu GitHub"
        />

        <ContatoLink
          href="mailto:wiinnye@gmail.com"
          icon={FaEnvelope}
          label="Enviar E-mail"
        />
      </VStack>
    </Flex>
  );
}