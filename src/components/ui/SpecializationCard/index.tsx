import React from "react";

import { Header, IconButton, Text } from "..";

import style from "./style.module.scss";

interface ISpecializationCard {
  icon?: string;
  headerId: string;
  textId: string;
}

const SpecializationCard: React.FC<ISpecializationCard> = ({
  icon,
  headerId,
  textId,
}) => {
  return (
    <div className={style.SpecializationCard}>
      <IconButton isNotButton isDisabled src={icon} />
      <Header className={style.SpecializationCard__header} id={headerId} />
      <Text className={style.SpecializationCard__text} id={textId} size="m" />
    </div>
  );
};

export default SpecializationCard;
