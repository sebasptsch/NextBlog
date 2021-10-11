import {
	component,
	fields,
	NotEditable,
} from "@keystone-next/fields-document/component-blocks";
import SyntaxHighlighter from "react-syntax-highlighter";
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark";
import textarea from "./codeField";

// naming the export componentBlocks is important because the Admin UI
// expects to find the components like on the componentBlocks export
export const componentBlocks = {
	code: component({
		component: ({ content, language }) => {
			return (
				<NotEditable>
					<SyntaxHighlighter language={language.value} style={atomOneDark}>
						{content.value}
					</SyntaxHighlighter>
				</NotEditable>
			);
		},
		label: "Code",
		props: {
			content: textarea({
				label: "Code",
				defaultValue: "console.log('Hello World!');",
			}),
			language: fields.text({ defaultValue: "javascript", label: "Language" }),
		},
		chromeless: false,
	}),
};
