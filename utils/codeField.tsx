import { FormField } from "@keystone-next/fields-document/component-blocks";
import { FieldContainer, FieldLabel, TextArea } from "@keystone-ui/fields";

export default function textarea({
  label,
  defaultValue = "",
}: {
  label: string;
  defaultValue?: string;
}): FormField<string, undefined> {
  return {
    kind: "form",
    Input({ value, onChange, autoFocus }) {
      return (
        <FieldContainer>
          <FieldLabel>{label}</FieldLabel>
          <TextArea
            autoFocus={autoFocus}
            value={value}
            style={{ fontFamily: "monospace" }}
            onChange={(event) => {
              onChange(event.target.value);
            }}
          />
        </FieldContainer>
      );
    },
    options: undefined,
    defaultValue,
    validate(value) {
      return typeof value === "string";
    },
  };
}