import { Flex, Icon, Text } from "@chakra-ui/react";
import { CiPhone } from "react-icons/ci";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { BsPersonArmsUp } from "react-icons/bs";
import Link from "next/link";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      bg="#0B3142"
      p="1rem"
    >
      <Link href='/' className={styles.menuLink}>
        Início
      </Link>
      <Flex w="auto" justifyContent="space-between">
        <Link href="/QuemSou" className={styles.menuLink}>
          <Icon size="lg" color="#ff7b00" mr="0.5rem">
            <BsPersonArmsUp />
          </Icon>
          Quem Sou
        </Link>
        <Link href="/Projetos" className={styles.menuLink} >
          <Icon size="lg" color="#ff7b00" mr="0.5rem">
            <PiProjectorScreenChartLight />
          </Icon>
          Projetos
        </Link>
         <Link href="/Contato" className={styles.menuLink} >
          <Icon size="lg" color="#ff7b00" mr="0.5rem">
            <CiPhone />
          </Icon>
          Contato
        </Link>
      </Flex>
    </Flex>
  );
}
