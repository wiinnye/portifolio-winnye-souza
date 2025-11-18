import { Button, Link, Icon } from "@chakra-ui/react";
const ContatoLink = ({ href, icon, label }) => {
  return (
    <Button
      as={Link}
      href={href}
      target="_blank" 
      w={{ base: "90%", md: "250px" }} 
      p={8}
      mt='.8rem'
      variant="solid"
      fontSize='20px'
      bg="#ff7b00"
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