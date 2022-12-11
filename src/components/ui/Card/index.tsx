import React from "react";
import cn from "classnames";

import style from "./style.module.scss";

interface ICard {
  className?: string;
  children: React.ReactNode;
  type?: "default" | "border";
}

const Card: React.FC<ICard> = ({ type = "default", children, className }) => {
  return (
    <div className={cn(style.Card, style[`Card_type-${type}`], className)}>
      {children}
    </div>
  );
};

export default Card;
