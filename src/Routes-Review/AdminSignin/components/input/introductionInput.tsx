import { FormLabel, Textarea } from "@chakra-ui/react";

export const IntroInput = (props: any) => {
  return (
    <div className="mb-6">
      <FormLabel>{`Give a brief introduction about yourself (${props.character})`}.</FormLabel>
      <Textarea
        height={"150px"}
        resize="none"
        name="about"
        placeholder="Something brief"
        onChange={props.handleChange}
        maxLength={160}
      />
    </div>
  );
};
