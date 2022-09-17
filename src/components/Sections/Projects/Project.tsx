import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react"
import { RiCodeFill, RiLinksLine } from "react-icons/ri"
import { Button } from "../../Button"

interface ProjectProps {
  
}

export const Project = ({  }: ProjectProps) => {
  
  return (
    <Box>
      <Box w="513" maxH="375" position="relative" rounded="sm" overflow="hidden">
        <Img transition=".6s" _hover={{
          transform: "scale(1.1)"
        }}src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
        <Flex flexWrap="wrap" justify="space-between" align="center" gap="2" w="100%" pt="16" pb="4" px={["4" ,"8"]}position="absolute" bottom={0} right={0} left={0} bg="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 67.08%)">
          <Heading fontSize={["xl", "2xl"]}>Titulo Projeto</Heading>
          <Text fontSize={["sm", "md"]}>17/09/2022</Text>
        </Flex>
      </Box>
      <Text mt="4" color="zinc.300" fontSize={["sm", "md"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      <Flex mt={["2", "4"]} gap="2" color="teal.500" flexWrap="wrap" fontSize={["sm", "md"]}>
        <Text>#teste</Text>
        <Text>#teste</Text>
        <Text>#teste</Text>
        <Text>#teste</Text>
        <Text>#teste</Text>
      </Flex>
      <Flex justify="space-between" mt={["4", "8"]}>
        <Button icon={<RiLinksLine size={24}/>}>
          Demo
        </Button>
        <Button icon={<RiCodeFill size={24}/>}secondary>
          Code
        </Button>
      </Flex>
    </Box>
  )
}