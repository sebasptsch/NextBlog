import {
  component,
  fields,
} from "@keystone-next/fields-document/component-blocks";

// naming the export componentBlocks is important because the Admin UI
// expects to find the components like on the componentBlocks export
export const componentBlocks = {
  code: component({
    component: ({ content, language }) => {
      return <>{content}</>; // TODO: normalize node to get plain text
    },
    label: "Code",
    props: {
      content: fields.child({
        kind: "block",
        placeholder: "Code",

        // links: "inherit",
      }),
      language: fields.text({ defaultValue: "javascript", label: "Language" }),
    },
    chromeless: false,
  }),
};
