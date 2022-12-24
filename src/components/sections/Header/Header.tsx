import { FC } from "react";
import cn from "classnames";

import { IHeaderProps } from ".";

import styles from "./Header.module.scss";

export const Header: FC<IHeaderProps> = (props) => {
  return (
    <header {...props} className={cn(styles.Header, props.className)}></header>
  );
};
