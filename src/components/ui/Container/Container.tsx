import { FC } from "react";
import cn from "classnames";

import { IContainerProps } from ".";

import styles from "./Container.module.scss";

export const Container: FC<IContainerProps> = (props) => {
  return <div {...props} className={cn(styles.Container, props.className)} />;
};
