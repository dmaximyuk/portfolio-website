import { FC } from "react";
import cn from "classnames";

import { FormattedMessage } from "react-intl";

import { ISubheaderProps } from ".";

import styles from "./Subheader.module.scss";

export const Subheader: FC<ISubheaderProps> = (props) => {
  return (
    <FormattedMessage id={props.id}>
      {(str) => (
        <h3 className={cn(styles.Subheader, props.className)}>{str}</h3>
      )}
    </FormattedMessage>
  );
};
