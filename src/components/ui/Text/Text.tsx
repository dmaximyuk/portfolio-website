import { FC } from "react";
import cn from "classnames";

import { FormattedMessage } from "react-intl";

import { ITextProps } from ".";

import styles from "./Text.module.scss";

export const Text: FC<ITextProps> = (props) => {
  if (props.children) {
    return (
      <p
        className={cn(
          styles.Text,
          styles[`Text_size-${props.size}`],
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
            styles[`Text_size-${props.size}`],
            props.className
          )}
        >
          {str}
        </p>
      )}
    </FormattedMessage>
  );
};

Text.defaultProps = {
  size: "l",
};
