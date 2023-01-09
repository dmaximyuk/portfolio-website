import { FC } from "react";
import cn from "classnames";

import { useSpring, animated } from "@react-spring/web";

import { ISlideProps } from ".";

import styles from "./Slide.module.scss";

export const Slide: FC<ISlideProps> = (props) => {
  const [divSpring] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay: 120,
    }),
    []
  );

  return (
    <animated.div
      style={divSpring}
      id={props.id}
      className={cn(styles.Slide, props.className)}
    >
      {props.children}
    </animated.div>
  );
};
