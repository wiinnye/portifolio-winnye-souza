import { Flex, Text } from "@chakra-ui/react";
import Menu from "../../components/Menu/Menu";
import Link from "next/link";
import styles from "./Contato.module.css";

export default function Contato() {
  return (
    <Flex h="100vh" flexDirection="column" justifyItems="center">
      <Menu />
      {/* <Text fontSize='28px' mt='1rem' p='1rem'>Contato:</Text> */}
      <Flex w="100%" h="100%" alignItems="center" justifyContent="space-around">
        <Flex
          w="200px"
          h="30%"
          bg="#1f9bee"
          alignItems="center"
          justify="center"
          borderRadius="10%"
        >
          <Link href="https://github.com/wiinnye" className={styles.menuLink}>
            Github
          </Link>
        </Flex>
        <Flex
          w="200px"
          h="30%"
          bg="#1f9bee"
          alignItems="center"
          justify="center"
          borderRadius="10%"
        >
          <Link
            href="https://www.linkedin.com/in/winnye-dandhara-souza/"
            className={styles.menuLink}
          >
            Linkedin
          </Link>
        </Flex>
        <Flex
          w="200px"
          h="30%"
          bg="#1f9bee"
          alignItems="center"
          justify="center"
          borderRadius="10%"
        >
          <Link
            href="https://gmail.com/wiinnye@gmail.com"
            className={styles.menuLink}
          >
            E-mail
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
