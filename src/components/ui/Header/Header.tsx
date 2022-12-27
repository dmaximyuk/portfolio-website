import { FC } from "react";
import cn from "classnames";

import { useIntl } from "react-intl";

import { IHeaderProps } from ".";

import styles from "./Header.module.scss";

export const Header: FC<IHeaderProps> = (props) => {
  const intl = useIntl();

  return (
    <h1
      dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: props.id }) }}
      className={cn(
        styles.Header,
        styles[`Header_size-${props.size || "m"}`],
        props.className
      )}
    />
  );
};
