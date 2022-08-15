import { styled } from "centaurus-styles";

export const ButtonStyled = styled("button", {
  marginBottom: "20px",
  fontFamily: "$default",
  fontWeight: "$regular",
  fontSize: "$subHeading",
  color: "$light-solid",
  borderRadius: "10px",
  width: "100%",
  height: "50px",
  border: 0,
  variants: {
    status: {
      disabled: {
        cursor: "not-allowed",
        background: "#D6D7DC",
        color: "#000826",
        opacity: 0.8
      },
      active: {
        cursor: "pointer",
        background: '$magenta',
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          animation: "moveInBottom 5s ease-out",
        },
        "&:focus": {
          border: `1px solid $dark-high`,
        },
      },
    },
  },
});
