import { FC } from "react";
import cn from "classnames";

import { Button } from "..";

import { IScrollToTopProps } from ".";

import styles from "./ScrollToTop.module.scss";

export const ScrollToTop: FC<IScrollToTopProps> = (props) => {
  return (
    <div className={cn(styles.ScrollToTop, props.className)}>
      <Button children={<>top</>} />
    </div>
  );
};
