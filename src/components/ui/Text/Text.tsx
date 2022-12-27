import { FC } from "react";
import cn from "classnames";

import { FormattedMessage } from "react-intl";

import { ITextProps } from ".";

import styles from "./Text.module.scss";

export const Text: FC<ITextProps> = ({ size = "l", ...props }) => {
  if (props.children) {
    return (
      <p
        className={cn(
          styles.Text,
          styles[`Text_size-${size}`],
          props.className
        )}
      >
        {props.children}
      </p>
    );
  }

  return (
    <FormattedMessage id={props.id} values={props.values}>
      {(str) => (
        <p
          className={cn(
            styles.Text,
            styles[`Text_size-${size}`],
            props.className
          )}
        >
          {str}
        </p>
      )}
    </FormattedMessage>
  );
};
