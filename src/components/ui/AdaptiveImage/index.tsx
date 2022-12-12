import React from "react";
import cn from "classnames";

import style from "./style.module.scss";

interface IAdaptiveImage {
  className?: string;
  imagePosition?: "lt" | "c";
  src: string;
}

const AdaptiveImage: React.FC<IAdaptiveImage> = ({
  className,
  imagePosition = "c",
  src,
}) => {
  return (
    <div className={cn(style.AdaptiveImage, className)}>
      <div className={style.AdaptiveImage__inherit}>
        <img
          className={cn(
            style.AdaptiveImage__img,
            style[`AdaptiveImage_position-${imagePosition}`]
          )}
          src={src}
          alt=""
        />
      </div>
    </div>
  );
};

export default AdaptiveImage;
