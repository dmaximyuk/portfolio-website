import { FC } from "react";
import cn from "classnames";

import { ICardGridProps } from ".";

import styles from "./CardGrid.module.scss";

export const CardGrid: FC<ICardGridProps> = (props) => {
  return (
    <div className={cn(styles.CardGrid, props.className)}>
      {Array.from(Array(props.iteration), props.children)}
    </div>
  );
};
