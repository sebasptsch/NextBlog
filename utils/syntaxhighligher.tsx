import { FormField } from "@keystone-next/fields-document/component-blocks";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

const SyntaxField: FormField = (
  value,
  { theme, onChange, onBlur, onFocus, ...props }
) => {
  return (
    <SyntaxHighlighter
      language="typescript"
      style={theme.code.style}
      showLineNumbers
      lineNumberStyle={theme.code.lineNumberStyle}
      lineNumberContainerStyle={theme.code.lineNumberContainerStyle}
      lineNumberCount={10}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      {...props}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default SyntaxField;
