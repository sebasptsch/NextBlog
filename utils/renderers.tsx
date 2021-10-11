import {
  Box,
  Button,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  useClipboard
} from "@chakra-ui/react";
import { DocumentRendererProps } from "@keystone-next/document-renderer";
import { InferRenderersForComponentBlocks } from "@keystone-next/fields-document/component-blocks";
import SyntaxHighlighter from "react-syntax-highlighter";
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark";
import { componentBlocks } from "./componentBlocks";

export const componentBlockRenderers: InferRenderersForComponentBlocks<
  typeof componentBlocks
> = {
  code: (props) => {
    const { content, language } = props;
    const { hasCopied, onCopy } = useClipboard(content);
    return (
      <Box w="100%" position="relative">
        <Button
          onClick={onCopy}
          m={2}
          size="sm"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 9,
          }}
        >
          {hasCopied ? "Copied" : "Copy"}
        </Button>
        <SyntaxHighlighter language={language} style={atomOneDark}>
          {content}
        </SyntaxHighlighter>
      </Box>
    );
  },
};

export const renderers: DocumentRendererProps["renderers"] = {
  // use your editor's autocomplete to see what other renderers you can override
  inline: {
    bold: ({ children }) => {
      return <strong>{children}</strong>;
    },
    code: ({ children }) => {
      return <code>{children}</code>;
    },
  },
  block: {
    paragraph: ({ children, textAlign }) => {
      return (
        <Text style={{ textAlign }} py={4} lineHeight={2} fontSize={"larger"} fontFamily={"serif"}>
          {children}
        </Text>
      );
    },
    list: ({ children, type }) => {
      return type === "ordered" ? (
        <OrderedList fontSize="larger">
          {children.map((li) => (
            <ListItem fontFamily="serif" key={li.key} >
              {li}
            </ListItem>
          ))}
        </OrderedList>
      ) : (
        <UnorderedList fontSize="larger">
          {children.map((li) => (
            <ListItem fontFamily="serif" key={li.key}>
              {li}
            </ListItem>
          ))}
        </UnorderedList>
      );
    },
    code: ({ children }) => {
      // console.log(children);
      return (
        <SyntaxHighlighter style={atomOneDark}>{children}</SyntaxHighlighter>
      );
    },

    heading: ({ children, textAlign, level }) => {
      const size = {
        1: "xl",
        2: "lg",
        3: "md",
        4: "sm",
        5: "xs",
      }[level];
      return (
        <Heading
          as={`h${level}`}
          size={size}
          style={{ textAlign }}
          pb={4}
          pt={8}
        >
          {children}
        </Heading>
      );
    },
  },
};
