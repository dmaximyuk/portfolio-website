import { FC } from "react";
import cn from "classnames";

import { Span, Button } from "..";

import { IScrollToProps } from ".";

import styles from "./ScrollTo.module.scss";

export const ScrollTo: FC<IScrollToProps> = (props) => {
  return (
    <Button
      type="filled"
      onClick={() => {
        const el = document.getElementById(props.to);
        const header = document.getElementById("header");

        if (el && header) {
          window.scrollTo(0, el.offsetTop - header.offsetHeight);
        }
      }}
      className={cn(styles.ScrollTo, props.className)}
    >
      <Span>{props.children}</Span>
    </Button>
  );
};
