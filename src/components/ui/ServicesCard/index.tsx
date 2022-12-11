import React from "react";

import { Card, Header, IconButton, Text } from "..";

import style from "./style.module.scss";

interface IServicesCard {
  icon?: string;
  headerId: string;
  textId: string;
}

const ServicesCard: React.FC<IServicesCard> = ({ icon, headerId, textId }) => {
  return (
    <Card className={style.ServicesCard}>
      <IconButton isNotButton isDisabled src={icon} />
      <Header className={style.ServicesCard__header} id={headerId} />
      <Text className={style.ServicesCard__text} id={textId} size="m" />
    </Card>
  );
};

export default ServicesCard;
