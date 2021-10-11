// keystone.ts

import { config, list } from "@keystone-next/keystone";
import { text, image, timestamp } from "@keystone-next/keystone/fields";

import { document } from "@keystone-next/fields-document";
import { componentBlocks } from "./utils/componentBlocks";
import { kebabCase } from "lodash";

const Post = list({
	fields: {
		title: text({
			isRequired: true,
		}),
		slug: text({
			isIndexed: "unique",
			isFilterable: true,
			ui: {
				createView: {
					fieldMode: "hidden",
				},
				itemView: {
					fieldMode: "hidden",
				},
			},
		}),
		summary: text({ isRequired: true }),
		image: image({ isRequired: false }),
		published_at: timestamp({ isOrderable: true, isRequired: true }),
		content: document({
			formatting: true,
			dividers: true,
			links: true,
			ui: {
				views: require.resolve("./utils/componentBlocks.tsx"),
			},
			componentBlocks,
		}),
	},
	hooks: {
		resolveInput: ({ resolvedData }) => {
			// console.log(resolvedData);
			const { title } = resolvedData;
			if (title) {
				// Ensure the first letter of the title is capitalised
				resolvedData.slug = kebabCase(title);
			}
			// We always return resolvedData from the resolveInput hook
			return resolvedData;
		},
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
