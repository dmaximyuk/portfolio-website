import { FC } from "react";
import cn from "classnames";

import { ICardProps } from ".";

import styles from "./Card.module.scss";

export const Card: FC<ICardProps> = ({
  type = "default",
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(styles.Card, styles[`Card_type-${type}`], className)}
      {...props}
    >
      {children}
    </div>
  );
};
