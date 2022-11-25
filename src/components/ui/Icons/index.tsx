import React from "react";
import cn from "classnames";

import style from "./style.module.scss";

interface IIcons {
  className?: string;
  src: React.ReactNode;
}

const Icons: React.FC<IIcons> = ({ className, src }) => {
  return (
    <a
      className={cn(style.Icons, className)}
      href="https://google.com"
      target="_blank"
    >
      {src}
    </a>
  );
};

export default Icons;
