import { FC } from "react";
import cn from "classnames";

import { ISlideProps } from ".";

import styles from "./Slide.module.scss";

export const Slide: FC<ISlideProps> = (props) => {
  return (
    <div
      id={props.id}
      ref={props.ref}
      className={cn(styles.Slide, props.className)}
    >
      {props.children}
    </div>
  );
};
