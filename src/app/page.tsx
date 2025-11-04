import { Flex, Grid, GridItem, Icon, Image, Text } from "@chakra-ui/react";
import { CiPhone } from "react-icons/ci";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { BsPersonArmsUp } from "react-icons/bs";

export default function Home() {
  return (

    <Grid w='100%' h='100vh' bg='#0B3142' >
      <GridItem
        width='100%'
        height="50%"
        padding='2rem'
      >
        <Flex w='100%' justifyContent='space-between' alignItems='center'>
          <Text fontSize='30px' fontFamily='fantasy'>Portifólio</Text>
          <Flex w='25%' justifyContent='space-between'>
            <Text fontSize='20px' cursor='pointer' fontFamily='fantasy'>
              <Icon size="lg" color="#fff" mr='0.5rem'><BsPersonArmsUp/></Icon>
              Quem Sou
            </Text>
            <Text fontSize='20px'cursor='pointer' fontFamily='fantasy'>
              <Icon size="lg" color="#fff" mr='0.5rem'><PiProjectorScreenChartLight/></Icon>
              Projetos
            </Text>
            <Text fontSize='20px' cursor='pointer' fontFamily='fantasy'>
              <Icon size="lg" color="#fff" mr='0.5rem'><CiPhone/></Icon>
              Contato
            </Text>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem>
        <Flex w='100%' justifyContent='space-between'>
          <Image w='40%' src='https://bowwe.com/upload/domain/37991/images/054_WebsiteBackground/Cover-2-Website-Background-com.webp?22168.29999998212' />
          <Flex w='50%' alignSelf='center' justify='center'>
          <Text>Desenvolvedora Frontend</Text>
          </Flex>
        </Flex>
    
      </GridItem>
    </Grid>
  );
}
