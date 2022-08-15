import { styled } from "centaurus-styles";

export const FieldsetStyles = styled("fieldset", {
  position: "relative",
  padding: "0",
  margin: "0",
  border: "0",
  marginBottom: "50px",
});

export const RadioStyles = styled("input", {
  float: "left",
  margin: "0 -1px 0 0",
  width: "50px",
  height: "50px",
  opacity: "0",
  border: "0",
});

export const Bstyles = styled("b", {
  position: "absolute",
  pointerEvents: "none",
  top: "-10px",
  left: "0",
  fontSize: "50px",
  opacity: "0",
  color: "gold",
});
