import { FC } from "react";
import cn from "classnames";

import { ILogoProps } from ".";

import styles from "./Logo.module.scss";

export const Logo: FC<ILogoProps> = (props) => {
  return <div {...props} className={cn(styles.Logo, props.className)}></div>;
};
