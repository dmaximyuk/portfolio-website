import { FC } from "react";
import cn from "classnames";

import { I{{pascalCase}}Props } from ".";

import styles from "./{{pascalCase}}.module.scss";

export const {{pascalCase}}: FC<I{{pascalCase}}Props> = (props) => {
  return <div {...props} className={cn(styles.{{pascalCase}}, props.className)}></div>;
};
