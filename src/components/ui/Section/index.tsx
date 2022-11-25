import React from "react";
import cn from "classnames";

import style from "./style.module.scss";

interface ISection {
  className?: string;
  type: "white" | "gray";
  children: React.ReactNode;
}

const Section: React.FC<ISection> = ({
  className,
  children,
  type,
  ...props
}) => {
  return (
    <section
      className={cn({
        [style["Section"]]: true,
        [style[`Section_color-${type}`]]: true,
      })}
      {...props}
    >
      <div className={cn(style.Section__container, className)}>{children}</div>
    </section>
  );
};

export default Section;
