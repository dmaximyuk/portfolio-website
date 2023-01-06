import { FC } from "react";
import cn from "classnames";

import { Ripple, Span } from "..";

import { IButtonProps } from ".";

import styles from "./Button.module.scss";

export const Button: FC<IButtonProps> = (props) => {
  return (
    <button
      className={cn(
        styles.Button,
        styles[`Button__${props.type}`],
        props.isActive && styles[`Button__${props.type}_active`],
        props.className
      )}
      onClick={props.onClick}
    >
      <Span>{props.children}</Span>
      {props.isRippled && <Ripple />}
    </button>
  );
};

Button.defaultProps = {
  type: "default",
  isActive: false,
};
