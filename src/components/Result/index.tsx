import { styled } from "centaurus-styles";
import { ErrorIcon, SucessIcon } from "../../assets/icons";
import { HeadingLarger } from "../Headings";

export const ResultsContainer = styled("div", {
  display: "flex",
  marginTop: "10px",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "70px",
});

export const Sucess = () => {
  return (
    <ResultsContainer>
      <SucessIcon />
      <HeadingLarger>Obrigado por avaliar nossos serviços</HeadingLarger>
    </ResultsContainer>
  );
};

export const Error = () => {
  return (
    <ResultsContainer>
      <ErrorIcon />
      <HeadingLarger>
        Houve um problema ao salvar sua avaliação, tente novamente
      </HeadingLarger>
    </ResultsContainer>
  );
};
