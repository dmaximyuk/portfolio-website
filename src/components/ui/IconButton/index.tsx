import React from "react";

import style from "./style.module.scss";

interface IIcon {
  classNames?: string;
  isDisabled: boolean;
  isNotButton?: boolean;
  src?: string;
}

const IconButton: React.FC<IIcon> = ({
  classNames,
  isNotButton,
  isDisabled,
  src,
}) => {
  const img = (
    <div className={style.IconButton__container}>
      <img className={style["IconButton__container-img"]} src={src} alt="" />
    </div>
  );
  if (isNotButton) return img;

  return (
    <button className={classNames} disabled={isDisabled}>
      {img}
    </button>
  );
};

export default IconButton;
