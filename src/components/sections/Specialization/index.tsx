import React from "react";

import { Section, SectionHeader, SpecializationCard } from "../../ui";

import style from "./style.module.scss";

import IconWebDev from "../../../assets/icons/specialization/shape.svg";
import IconBackend from "../../../assets/icons/specialization/layers.svg";
import IconMobileDev from "../../../assets/icons/specialization/crown.svg";

interface ISpecialization {}

const Specialization: React.FC<ISpecialization> = () => {
  const id = "section.specialization";

  return (
    <Section className={style.Specialization} type="gray">
      <div className={style["Specialization__container-header"]}>
        <SectionHeader
          className={style.Specialization__header}
          subheaderId={`${id}.subheader`}
          headerId={`${id}.header`}
        />
        <div className={style["Specialization__container-card"]}>
          {Array.from(Array(3), (_, i) => {
            const index = i + 1;
            const image = [IconWebDev, IconBackend, IconMobileDev];

            return (
              <SpecializationCard
                icon={image[i]}
                key={`spec-card-${i}`}
                headerId={`${id}.card.${index}.header`}
                textId={`${id}.card.${index}.text`}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Specialization;
