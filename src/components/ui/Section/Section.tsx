import { FC } from "react";
import cn from "classnames";

import { Container } from "..";

import { ISectionProps } from ".";

import styles from "./Section.module.scss";

export const Section: FC<ISectionProps> = (props) => {
  return (
    <section
      className={cn({
        [styles["Section"]]: true,
        [styles[`Section_color-${props.type}`]]: true,
      })}
    >
      <Container className={cn(styles.Section__container, props.className)}>
        {props.children}
      </Container>
    </section>
  );
};
