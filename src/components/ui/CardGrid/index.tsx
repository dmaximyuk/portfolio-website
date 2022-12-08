import React from "react";
import cn from "classnames";

import style from "./style.module.scss";

interface ICardGrid {
  className?: string;
  iteration: number;
  children: (v: any, k: number) => React.ReactNode;
}

const CardGrid: React.FC<ICardGrid> = ({ className, iteration, children }) => {
  return (
    <div
      className={cn(
        {
          [style.CardGrid]: true,
        },
        className
      )}
    >
      {Array.from(Array(iteration), children)}
    </div>
  );
};

export default CardGrid;
