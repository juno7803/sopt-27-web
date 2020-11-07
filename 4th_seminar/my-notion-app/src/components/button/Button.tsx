import React from "react";
import "./Button.scss";

interface IButton {
  text: string;
  textColor?: string;
  onClickFunc?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
}
function Button({ text, textColor = "#444", onClickFunc }: IButton) {
  return (
    <div className="button" 
        style={{ color: textColor }} 
        onClick={onClickFunc}
    >{ text}</div>
  );
}

export default Button;
