import { Flex, Grid, GridItem, Icon, Image, Text } from "@chakra-ui/react";
import Menu from "../components/Menu/Menu";

export default function Home() {
  return (
    <Grid w="100%" h="100vh" bg="#d5e5ec">
      <GridItem width="100%" height="50%">
        <Menu/>
      </GridItem>
      <GridItem>
        <Flex w="100%" justifyContent="space-between">
          <Image
            w="40%"
            src="https://bowwe.com/upload/domain/37991/images/054_WebsiteBackground/Cover-2-Website-Background-com.webp?22168.29999998212"
          />
          <Flex w="50%" alignSelf="center" justify="center">
            <Flex w='70%' flexDirection='column' alignItems="center">
              <Text fontSize='30px' fontWeight='bold'>Desenvolvedora Frontend</Text>
              <Text mt='1rem' alignSelf="center">
                Programadora com conhecimento em JavaScript, React.js, HTML e
                CSS, aprimorando os conhecimentos em Next.js e Typescript.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
}
