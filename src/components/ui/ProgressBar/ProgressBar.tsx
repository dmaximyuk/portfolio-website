import { FC } from "react";
import cn from "classnames";

import { IProgressBarProps } from ".";

import styles from "./ProgressBar.module.scss";

export const ProgressBar: FC<IProgressBarProps> = (props) => {
  return (
    <div
      className={cn(styles.ProgressBar, props.className)}
      style={props.style}
    >
      <div
        className={styles.ProgressBar__status}
        style={{ width: `${props.current}%` }}
      />
    </div>
  );
};
