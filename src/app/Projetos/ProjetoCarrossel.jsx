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
import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PROJETOS = [
  {
    id: 1,
    titulo: "E-commerce Moderno",
    imagem: "/images/projeto1.jpg",
    descricao:
      "Desenvolvimento de uma loja virtual completa com Next.js, Stripe e integração de API.",
    link: "https://exemplo.com/1",
  },

  {
    id: 2,
    titulo: "Dashboard Analítico",
    imagem: "/images/projeto2.jpg",
    descricao:
      "Painel de controle com gráficos em tempo real usando Recharts e autenticação via NextAuth.",
    link: "https://exemplo.com/2",
  },

  {
    id: 3,
    titulo: "Blog Pessoal Dinâmico",
    imagem: "/images/projeto3.jpg",
    descricao:
      "Plataforma de blog utilizando Markdown, CMS headless e otimização SEO.",
    link: "https://exemplo.com/3",
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
        pb={4}
        scrollSnapType="x mandatory"
      >
        {PROJETOS.map((projeto) => (
          <Box
            key={projeto.id}
            flex="0 0 auto"
            w="400px"
            mr={4}
            p={5}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
            scrollSnapAlign="start"
          >
            <Center h="200px" mb={4} overflow="hidden" borderRadius="md">
              <Image
                src={projeto.imagem}
                alt={`Imagem do projeto ${projeto.titulo}`}
                objectFit="cover"
                w="full"
                h="full"
              />
            </Center>
            <Heading as="h3" size="md" mb={2} color="#000">
              {projeto.titulo}
            </Heading>
            <Text fontSize="sm" color="gray.500">
              {projeto.descricao}
            </Text>
          </Box>
        ))}
      </Flex>

      <Button
        size="lg"
        position="absolute"
        left={{ base: "0", md: "-30px" }}
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
        right={{ base: "0", md: "-30px" }}
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
