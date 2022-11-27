import React from "react";

import { Header, Text } from "..";

import style from "./style.module.scss";

interface ISpecializationCard {
  icon?: React.ReactNode;
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
      <Header id={headerId} />
      <Text id={textId} />
    </div>
  );
};

export default SpecializationCard;
