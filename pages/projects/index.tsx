import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Spacer,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useRef } from "react";
import Layout from "../../components/Layout";
import {
  NextChakraLink,
  NextChakraLinkBox,
} from "../../components/NextChakraLink";
import { useProjects } from "../../utils";

export default function Home() {
  const {
    setSize,
    size,
    projects,
    more,
    isLoading,
    isError,
    mutate,
    isLoadingMore,
  } = useProjects(10);
  console.log(projects);
  const testRef = useRef();
  return (
    <Layout>
      <Box mt={10} mb={10}>
        <Heading as="h1" size="4xl" textAlign="center">
          Projects
        </Heading>
        <Divider mt={5} />
      </Box>

      <Stack>
        {projects?.map((project) => {
          return (
            <NextChakraLinkBox
              borderWidth="1px"
              borderRadius="10px"
              overflow="hidden"
              key={project.id}
              w="100%"
              href={`/projects/${project.slug}`}
            >
              {project.cover ? (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "20em",
                  }}
                >
                  <Image
                    alt={project.cover.alternativeText}
                    src={`https://blog.sebasptsch.dev` + project.cover.url}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ) : null}
              <Box p={4}>
                <Flex>
                  <Heading size="md">{project.title}</Heading>
                  <Spacer />
                  <Text fontWeight="semibold" fontSize="s" ml={2}>
                    {new Date(
                      Date.parse(project.published_at)
                    ).toLocaleDateString()}{" "}
                  </Text>
                </Flex>
                <Text>{project.excerpt}</Text>
              </Box>
            </NextChakraLinkBox>
          );
        })}
        <div ref={testRef} style={{ display: "none" }} />
      </Stack>
      <br />
      <Center>
        <Button
          disabled={!more}
          onClick={() => {
            setSize(size + 1);
          }}
        >
          Load More
        </Button>
      </Center>
    </Layout>
  );
}
