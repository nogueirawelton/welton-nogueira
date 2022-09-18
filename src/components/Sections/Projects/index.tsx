import { Box, Heading, SimpleGrid, useBreakpointValue } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { prismic } from "../../../services/prismic";
import { Project } from "./Project"

interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  tags: {
    tag: string;
  }[];
  code: string;
  demo: string;
  example: string;
}
export const Projects = () => {

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    prismic.getByType("project").then(({results}) => {
      setProjects(
        results.map(result => {
          const { id, data: { title, date, description, tags, code, demo, example } } = result;
          return {
            id,
            title,
            description,
            tags,
            code: code.url,
            demo: demo.url,
            example: example.url,
            date: new Date(date).toLocaleString("pt-BR", {
              day:"2-digit",
              month:"2-digit",
              year: "2-digit"
            }),
          }
        })
      );
    });
  }, [])

  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });

  return (
    <Box id="projects" bg="zinc.900">
      <Box 
      maxW={1280}
      mx="auto"
      px="8"
      py={["24", "32"]}
    >
        <Heading fontSize={["2xl", "3xl"]}>
          PROJETOS
        </Heading>
        <SimpleGrid mt="8" columns={2} spacing="16" minChildWidth={isMobile ? 280 : 416}>
          {
            projects.map(p => <Project key={p.id} data={p}/>)
          }
        </SimpleGrid>
      </Box>
    </Box>
  )
}