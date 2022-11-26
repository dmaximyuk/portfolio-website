import React from "react";
import cn from "classnames";

import style from "./style.module.scss";

interface ILinkedIcon {
  className?: string;
  src: React.ReactNode;
  href: string;
}

const LinkedIcon: React.FC<ILinkedIcon> = ({ className, href, src }) => {
  return (
    <a className={cn(style.LinkedIcon, className)} href={href} target="_blank">
      {src}
    </a>
  );
};

export default LinkedIcon;
