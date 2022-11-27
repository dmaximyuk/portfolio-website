import React from "react";

import { Section, SectionHeader, SpecializationCard } from "../../ui";

import style from "./style.module.scss";

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
          {Array.from(Array(3), (_, i) => (
            <SpecializationCard
              key={`spec-card-${i}`}
              headerId={`${id}.card.${++i}.header`}
              textId={`${id}.card.${++i}.text`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Specialization;
