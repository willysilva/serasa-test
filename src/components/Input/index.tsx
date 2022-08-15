import React, { InputHTMLAttributes, forwardRef } from "react";
import { InputContainer, InputStyles, LabelStyles } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}

// forwardRef

const InputComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ label, name, ...rest }, ref) => {
  return (
    <InputContainer>
      {label && <LabelStyles htmlFor={name}>{label}</LabelStyles>}
      <InputStyles name={name} ref={ref} {...rest} />
    </InputContainer>
  );
};

export const Input = forwardRef(InputComponent);
