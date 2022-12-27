import { FC } from "react";
import cn from "classnames";

import { ISpanProps } from ".";

import styles from "./Span.module.scss";

export const Span: FC<ISpanProps> = (props) => {
  return <span {...props} className={cn(styles.Span, props.className)} />;
};
