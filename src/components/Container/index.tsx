import { ContainerStyled } from "./styles";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};
