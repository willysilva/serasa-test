import React from "react";
import { createPortal } from "react-dom";
import { ModalBrackdrop, ModalInner } from "./styles";

interface ModalProps {
  children?: React.ReactNode;
}

const BackDrop = () => {
  return <ModalBrackdrop></ModalBrackdrop>;
};

const Overlay = (props: ModalProps) => {
  return <ModalInner>{props.children}</ModalInner>;
};

export const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <>
      {createPortal(<BackDrop />, document.getElementById("backdrop-root")!)}
      {createPortal(
        <Overlay children={children} />,
        document.getElementById("overlay-root")!
      )}
    </>
  );
};
