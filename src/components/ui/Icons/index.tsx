import React from "react";
import cn from "classnames";

import style from "./style.module.scss";

interface IIcons {
  className?: string;
  src: React.ReactNode;
  href: string;
}

const Icons: React.FC<IIcons> = ({ className, href, src }) => {
  return (
    <a className={cn(style.Icons, className)} href={href} target="_blank">
      {src}
    </a>
  );
};

export default Icons;
