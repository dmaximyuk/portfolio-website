import React from "react";
import cn from "classnames";

import style from "./style.module.scss";

interface ICard {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<ICard> = ({ children, className }) => {
  return <div className={cn(style.Card, className)}>{children}</div>;
};

export default Card;
