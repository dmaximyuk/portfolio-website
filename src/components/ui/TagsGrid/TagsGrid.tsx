import { FC } from "react";
import cn from "classnames";

import { ITagsGridProps } from ".";

import styles from "./TagsGrid.module.scss";

export const TagsGrid: FC<ITagsGridProps> = (props) => {
  return (
    <div {...props} className={cn(styles.TagsGrid, props.className)}>
      {props.children}
    </div>
  );
};
