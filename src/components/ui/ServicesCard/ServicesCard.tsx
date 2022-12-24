import { FC } from "react";
import cn from "classnames";

import { Text, Header, IconButton, Card } from "..";

import { IServicesCardProps } from ".";

import styles from "./ServicesCard.module.scss";

export const ServicesCard: FC<IServicesCardProps> = (props) => {
  return (
    <Card {...props} className={cn(styles.ServicesCard, props.className)}>
      <IconButton isDisabled src={props.icon} />
      <Header className={styles.ServicesCard__header} id={props.headerId} />
      <Text className={styles.ServicesCard__text} id={props.textId} size="m" />
    </Card>
  );
};
