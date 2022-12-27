import { FC } from "react";
import cn from "classnames";

import { Ripple, Span } from "..";

import { IButtonProps } from ".";

import styles from "./Button.module.scss";

export const Button: FC<IButtonProps> = (props) => {
  return (
    <button {...props} className={cn(styles.Button, props.className)}>
      <Span>{props.children}</Span>
      <Ripple />
    </button>
  );
};
