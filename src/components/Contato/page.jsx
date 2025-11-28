import { Button, Link, Icon } from "@chakra-ui/react";
const ContatoLink = ({ href, icon, label }) => {
  return (
    <Button
      as={Link}
      href={href}
      target="_blank" 
      w={{ base: "300px", md: "300px" }} 
      h='150px'
      alignSelf="center" 
      p={8}
      mt='.8rem'
      mb='1rem'
      variant="solid"
      fontSize='2xl'
      bg="#40c0cb"
      borderRadius="xl"
      boxShadow="xl"
      transition="all 0.3s ease-in-out"
      _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}
      leftIcon={<Icon as={icon} w={6} h={6} />} 
    >
      {label}
    </Button>
  );
};

export default ContatoLink;