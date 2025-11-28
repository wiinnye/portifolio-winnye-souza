"use client";

import { Flex, Box } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      bg="#fff"
      position="fixed"
      top="0"
      left="0"
      zIndex="10"
      p="1rem"
      boxShadow="md"
    >
      <Flex w='100%' justify='space-between' pl={{lg:"5rem"}} pr={{lg:"5rem"}}>
        <Link href="/" className={styles.menuLink}>
          Início
        </Link>
        <Link href="/QuemSou" className={styles.menuLink}>
          Quem Sou
        </Link>

        <Link href="/Projetos" className={styles.menuLink}>
          Projetos
        </Link>

        <Link href="/Contato" className={styles.menuLink}>
          Contato
        </Link>
      </Flex>
      <Box h="4rem" />
    </Flex>
  );
}
