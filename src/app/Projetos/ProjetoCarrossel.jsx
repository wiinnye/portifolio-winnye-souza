"use client";
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Center,
  Icon,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PROJETOS = [
  {
    id: 1,
    titulo: "Loja Online",
    imagem: "/images/loja.png",
    descricao:
      "Desenvolvimento de uma loja virtual completa com React.js, Chakra ui e integração de API.",
    link: "loversclub.vercel.app",
  },

  {
    id: 2,
    titulo: "Codificador",
    imagem: "/images/codificador.png",
    descricao:
      "Site de codificador criptografador, utilizando React.js",
    link: "https://codificador-olive.vercel.app/",
  },

  {
    id: 3,
    titulo: "Blog Pessoal Dinâmico",
    imagem: "/images/cardgame.png",
    descricao:
      "Projeto desenvolvido no final do segundo semestre do curso de ADS, criamos um site para pode ilustrar os card feito no photoshop",
    link: "https://cardsgame-ten.vercel.app/",
  },
];

export default function ProjetosCarrossel() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const CARD_WIDTH_PX = 416;

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const newIndex =
        direction === "right"
          ? Math.min(currentIndex + 1, PROJETOS.length - 1)
          : Math.max(currentIndex - 1, 0);

      setCurrentIndex(newIndex);

      scrollRef.current.scrollTo({
        left: newIndex * CARD_WIDTH_PX,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box position="relative" maxW="1200px" mx="auto" bg="#fff">
      <Flex
        ref={scrollRef}
        overflowX="hidden"
        pb={6}
        scrollSnapType="x mandatory"
      >
        {PROJETOS.map((projeto) => (
          <Flex
           direction='column'
            key={projeto.id}
            flex="0 0 auto"
            w="400px"
            h='400px'
            mr={4}
            p={5}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
            scrollSnapAlign="start"
            justify='space-between'
          >
            <Center h="200px" mb={4} overflow="hidden" borderRadius="md">
              <Image
                src={projeto.imagem}
                alt={`Imagem do projeto ${projeto.titulo}`}
                objectFit="contain"
                w="full"
                h="full"
              />
            </Center>
            <Box>
              <Heading as="h3" size="md" mb={2} color="#000">
                {projeto.titulo}
              </Heading>
              <Text fontSize="sm" color="gray.500">
                {projeto.descricao}
              </Text>
            </Box>

            <Box  mt='1rem' alignSelf='flex-end' justifySelf='flex-end'>
              <Link
                color='#000'
                href='https://loversclub.vercel.app'
              >
                <Text color='#423b3bff'>ver mais</Text>
              </Link>
            </Box>
          </Flex>
        ))}
      </Flex>

      <Button
        size="lg"
        position="absolute"
        left={{ base: "0", md: "-60px" }}
        top="50%"
        transform="translateY(-50%)"
        bg="#0B3142"
        boxShadow="lg"
        zIndex={10}
        onClick={() => handleScroll("left")}
        isDisabled={currentIndex === 0}
      >
        <Icon size="lg" color="#ff7b00" mr="0.5rem">
          <FaChevronLeft />
        </Icon>
      </Button>

      <Button
        size="lg"
        position="absolute"
        right={{ base: "0", md: "-60px" }}
        top="50%"
        transform="translateY(-50%)"
        bg="#0B3142"
        boxShadow="lg"
        zIndex={10}
        onClick={() => handleScroll("right")}
        isDisabled={currentIndex === PROJETOS.length - 1}
      >
        <Icon size="lg" color="#ff7b00" mr="0.5rem">
          <FaChevronRight />
        </Icon>
      </Button>
    </Box>
  );
}
