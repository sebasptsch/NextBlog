// keystone.ts

import { config, list } from "@keystone-next/keystone";
import { text, image, timestamp } from "@keystone-next/keystone/fields";

import { document } from "@keystone-next/fields-document";
import { componentBlocks } from "./utils/codeblocks";

const Post = list({
  fields: {
    title: text({ isRequired: true }),
    slug: text({ isIndexed: "unique", isFilterable: true }),
    summary: text({ isRequired: true }),
    image: image({ isRequired: false }),
    published_at: timestamp({ isOrderable: true, isRequired: true }),
    content: document({
      formatting: true,
      dividers: true,
      links: true,
      ui: {
        views: require.resolve("./utils/codeblocks.tsx"),
      },
      componentBlocks,
    }),
  },
});

export default config({
  db: { provider: "sqlite", url: "file:./app.db" },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },
  lists: { Post },
  images: {
    upload: "local",
    local: {
      storagePath: "public/images",
      baseUrl: "/images",
    },
  },
});
