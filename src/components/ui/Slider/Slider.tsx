import { FC } from "react";
import cn from "classnames";

import { ISliderProps } from ".";

import styles from "./Slider.module.scss";

export const Slider: FC<ISliderProps> = (props) => {
  return (
    <div className={cn(styles.Slider, props.className)}>
      {props.children.filter((item) => item.key === props.activeSlide)}
    </div>
  );
};
