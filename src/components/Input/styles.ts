import { styled } from "centaurus-styles";

export const InputContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  marginBottom: "16px",
  width: "100%",
});

export const LabelStyles = styled("label", {});

export const InputStyles = styled("input", {
  flexDirection: "center",
  border: `1px solid $dark-low`,
  outline: "none",
  padding: "0 10px",
  height:"56px",
  fontSize: "$subHeading",
  fontFamily: "$default",
  fontWeight: "$regular",
  borderRadius: "10px",
  "&:hover": {
    border: `1px solid $magenta`,
  },
  "&:focus": {
    border: `2px double $magenta`,
  },
  variants: {
    status: {
      withError: {
        border: `1px solid $magenta`,
      },
    },
  },
});
