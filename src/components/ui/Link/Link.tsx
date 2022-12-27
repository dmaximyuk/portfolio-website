import { FC } from "react";
import cn from "classnames";

import { Span } from "..";

import { ILinkProps } from ".";

import styles from "./Link.module.scss";

export const Link: FC<ILinkProps> = (props) => {
  return (
    <a {...props} className={cn(styles.Link, props.className)}>
      <Span>{props.children}</Span>
    </a>
  );
};
