import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react"
import { RiCodeFill, RiLinksLine } from "react-icons/ri"
import { Button } from "../../Button"

interface ProjectProps {
  data: {
    title: string;
    date: string;
    description: string;
    demo: string;
    code: string;
    example: string;
    tags: {
      tag: string;
    }[];
  }
}

export const Project = ({ data: { title, date, description, tags, demo, code, example } }: ProjectProps) => {
  
  return (
    <Box maxW="512">
      <Box maxH="375" position="relative" rounded="sm" overflow="hidden">
        <Img transition=".6s" _hover={{
          transform: "scale(1.1)"
        }}src={example} />
        <Flex
          flexWrap="wrap"
          justify="space-between"
          align="center"
          gap="2"
          w="100%"
          pt="16"
          pb="4"
          px={["4","8"]}position="absolute"
          bottom={0}
          right={0}
          left={0}
          bg="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 67.08%)"
          rounded="sm" overflow="hidden"
        >
          <Heading as="h3" fontSize={["xl", "2xl"]}>{title}</Heading>
          <Text color="zinc.300" fontSize={["sm", "md"]}>{date}</Text>
        </Flex>
      </Box>
      <Text mt="4" color="zinc.300" fontSize={["sm", "md"]}>{description}</Text>
      <Flex mt={["2", "4"]} gap="2" color="teal.500" flexWrap="wrap" fontSize={["sm", "md"]}>
        {
          tags.map((t, index) => (
            <Text key={index}>{`#${t.tag}`}</Text>
          ))
        }
      </Flex>
      <Flex justify="space-between" mt={["4", "8"]}>
        <Button href={demo} icon={<RiLinksLine size={24}/>}>
          Demo
        </Button>
        <Button href={code} icon={<RiCodeFill size={24}/>}secondary>
          Code
        </Button>
      </Flex>
    </Box>
  )
}