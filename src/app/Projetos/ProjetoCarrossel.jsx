import { Box, Flex, Image, Heading, Text, Center } from "@chakra-ui/react";

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
  return (
    <Flex
      overflowX="scroll"
      pb={4}
      sx={{
        "&::-webkit-scrollbar": { display: "none" },
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
      scrollSnapType="x mandatory"
    >
      {PROJETOS.map((projeto) => (
        <Box
          key={projeto.id}
          flex="0 0 auto"
          w={{ base: "90vw", md: "400px" }}
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

          <Heading as="h3" size="md" mb={2}>
            {projeto.titulo}
          </Heading>
          <Text fontSize="sm" color="gray.600">
            {projeto.descricao}
          </Text>
        </Box>
      ))}
    </Flex>
  );
}
