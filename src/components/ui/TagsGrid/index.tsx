import React from "react";
import cn from "classnames";

import style from "./style.module.scss";

interface ITagsGrid {
  className?: string;
  children: React.ReactNode;
}

const TagsGrid: React.FC<ITagsGrid> = ({ className, children }) => {
  return <div className={cn(style.TagsGrid, className)}>{children}</div>;
};

export default TagsGrid;
