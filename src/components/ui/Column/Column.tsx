import { FC } from "react";
import cn from "classnames";

import { IColumnProps } from ".";

import styles from "./Column.module.scss";

export const Column: FC<IColumnProps> = (props) => {
  return (
    <div className={cn(styles.Column, props.className)}>
      <div className={styles.Column_side}>{props.side}</div>
      <div className={styles.Column_right}>{props.children}</div>
    </div>
  );
};
