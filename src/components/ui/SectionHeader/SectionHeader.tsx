import { FC } from "react";
import cn from "classnames";

import { Subheader, Header } from "..";

import { ISectionHeaderProps } from ".";

import styles from "./SectionHeader.module.scss";

export const SectionHeader: FC<ISectionHeaderProps> = (props) => {
  return (
    <div className={cn(styles.SectionHeader, props.className)}>
      <Subheader
        className={styles.SectionHeader__subheader}
        id={props.subheaderId}
      />
      <Header
        className={styles.SectionHeader__header}
        id={props.headerId}
        size="xl"
      />
    </div>
  );
};
