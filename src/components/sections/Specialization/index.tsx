import React from "react";

import { CardGrid, Section, SectionHeader, SpecializationCard } from "../../ui";

import style from "./style.module.scss";

import IconWebDev from "../../../assets/icons/specialization/shape.svg";
import IconBackend from "../../../assets/icons/specialization/layers.svg";
import IconMobileDev from "../../../assets/icons/specialization/crown.svg";

interface ISpecialization {}

const Specialization: React.FC<ISpecialization> = () => {
  const id = "section.specialization";
  const images = [IconWebDev, IconBackend, IconMobileDev];

  return (
    <Section className={style.Specialization} type="gray">
      <SectionHeader
        className={style.Specialization__header}
        subheaderId={`${id}.subheader`}
        headerId={`${id}.header`}
      />
      <CardGrid iteration={3}>
        {(_, i) => {
          return (
            <SpecializationCard
              icon={images[i]}
              key={`spec-card-${i}`}
              headerId={`${id}.card.${i}.header`}
              textId={`${id}.card.${i}.text`}
            />
          );
        }}
      </CardGrid>
    </Section>
  );
};

export default Specialization;
