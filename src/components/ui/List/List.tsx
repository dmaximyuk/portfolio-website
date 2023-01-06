import { FC } from "react";
import { useIntl } from "react-intl";
import cn from "classnames";

import { Span } from "..";

import { IListProps } from ".";

import styles from "./List.module.scss";

export const List: FC<IListProps> = (props) => {
  const intl = useIntl();

  return (
    <ul className={cn(styles.List, props.className)}>
      {Array.from(Array(props.iteration), (_, i) => (
        <li className={styles.List__item} key={`list-${i}-${props.iteration}`}>
          <Span>{intl.formatMessage({ id: `${props.id}.${i}` })}</Span>
        </li>
      ))}
    </ul>
  );
};
