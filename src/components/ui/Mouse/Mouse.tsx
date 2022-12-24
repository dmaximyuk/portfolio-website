import { FC } from "react";
import cn from "classnames";

import { IMouseProps } from ".";

import styles from "./Mouse.module.scss";

export const Mouse: FC<IMouseProps> = (props) => {
  return (
    <div
      className={cn(styles.Mouse, props.className)}
      style={{
        top: (props.cursorPosition?.y || 0) - 6,
        left: (props.cursorPosition?.x || 0) - 6,
        display: !props.cursorPosition ? "none" : "block",
      }}
    >
      <div className={styles.Mouse__bubble} />
    </div>
  );
};
