import { FC } from "react";
import cn from "classnames";

import { ILinkIconProps } from ".";

import styles from "./LinkIcon.module.scss";

export const LinkIcon: FC<ILinkIconProps> = (props) => {
  return (
    <a
      className={cn(styles.LinkIcon, props.className)}
      href={props.href}
      rel="noreferrer"
      target="_blank"
    >
      {props.icon}
    </a>
  );
};
