import { FC } from "react";
import cn from "classnames";

import { FormattedMessage } from "react-intl";

import { IHeaderProps } from ".";

import styles from "./Header.module.scss";

export const Header: FC<IHeaderProps> = (props) => {
  return (
    <FormattedMessage id={props.id}>
      {(str) => (
        <h1
          className={cn(
            styles.Header,
            styles[`Header_size-${props.size || "m"}`],
            props.className
          )}
        >
          {str}
        </h1>
      )}
    </FormattedMessage>
  );
};
