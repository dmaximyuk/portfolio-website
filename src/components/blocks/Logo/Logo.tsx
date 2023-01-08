import { FC } from "react";
import cn from "classnames";

import { Header, ScrollTo, Text } from "components/ui";

import { ILogoProps } from ".";

import styles from "./Logo.module.scss";

export const Logo: FC<ILogoProps> = (props) => {
  return (
    <ScrollTo to="about">
      <div {...props} className={cn(styles.Logo, props.className)}>
        <div className={styles.Logo__container}>
          <Text className={styles.Logo__text}>M</Text>
        </div>
        <Header
          className={styles.Logo__header}
          size="l"
          id="header.navigation.logo.text"
        />
      </div>
    </ScrollTo>
  );
};
