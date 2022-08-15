import { styled } from "centaurus-styles";

export const ModalBrackdrop = styled("div", {
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    filter: "blur(5px)",
    overflow: "auto",
    zIndex: "10000",
  });
  
  export const ModalInner = styled("div", {
    position: "fixed",
    width: "100%",
    maxWidth: "900px",
    padding: "3rem",
    background: "white",
    top: "50%",
    right: "50%",
    transform: "translate(50%, -50%)",
    height: "auto",
    maxHeight: "90vh",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "1rem 1rem 1rem 1rem",
    zIndex: "11000",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
    overflowX: "hidden",
    "@bp1": {
        width: "80%"
    }
  });