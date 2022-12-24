import { FC } from "react";
import cn from "classnames";

import { Text } from "..";

import { ITagsProps } from ".";

import styles from "./Tags.module.scss";

export const Tags: FC<ITagsProps> = (props) => {
  return (
    <div className={styles.Tags} {...props}>
      <Text className={styles.Tags__text} size="s" id={props.id} />
    </div>
  );
};
