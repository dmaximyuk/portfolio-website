import { FC } from "react";

import { IIconButtonProps } from ".";

import styles from "./IconButton.module.scss";

export const IconButton: FC<IIconButtonProps> = (props) => {
  const img = (
    <div className={styles.IconButton__container}>
      <img
        className={styles["IconButton__container-img"]}
        src={props.src}
        alt=""
      />
    </div>
  );

  if (!props.isButton) return img;

  return (
    <button className={props.className} disabled={props.isDisabled}>
      {img}
    </button>
  );
};
