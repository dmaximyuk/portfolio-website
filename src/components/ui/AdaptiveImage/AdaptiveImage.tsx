import { FC } from "react";
import cn from "classnames";

import { IAdaptiveImageProps } from ".";

import styles from "./AdaptiveImage.module.scss";

export const AdaptiveImage: FC<IAdaptiveImageProps> = (props) => {
  return (
    <div className={cn(styles.AdaptiveImage, props.className)}>
      <div className={styles.AdaptiveImage__inherit}>
        <img
          className={cn(
            styles.AdaptiveImage__img,
            styles[`AdaptiveImage_position-${props.imagePosition || "lt"}`]
          )}
          src={props.src}
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
};
