import { InputHTMLAttributes } from "react";
import { LoadingButton } from "../../assets/icons";
import { ButtonStyled } from "./styles";

interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  name?: string;
  status?: "disabled" | "active" | undefined;
  loading?: boolean;
}

export const Button = ({ status, name, loading }: ButtonProps) => {
  return (
    <ButtonStyled disabled={status === "disabled" || loading} status={status}>
      {loading ? <LoadingButton /> : name}
    </ButtonStyled>
  );
};
