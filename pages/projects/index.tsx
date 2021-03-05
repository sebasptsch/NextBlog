import {
  Box,
  Button,
  Center,
  Divider, Heading, Stack
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import React, { useRef } from "react";
import Layout from "../../components/Layout";
import { useProjects } from "../../utils";
import { PostCard } from "../../utils/customElements";

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
      <NextSeo title={`Projects | Seb's Blog`} />
      <Box mt={10} mb={10}>
        <Heading as="h1" size="4xl" textAlign="center">
          Projects
        </Heading>
        <Divider mt={5} />
      </Box>

      <Stack divider={<Divider />}>
        {projects?.map((project) => {
          return <PostCard post={project} url={`/projects/${project.slug}`} />;
        })}
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
      </Stack>
    </Layout>
  );
}
