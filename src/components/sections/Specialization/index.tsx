import React from "react";

import { Section, SectionHeader } from "../../ui";

import style from "./style.module.scss";

interface ISpecialization {}

const Specialization: React.FC<ISpecialization> = () => {
  const id = "section.specialization";

  return (
    <Section className={style.Specialization} type="gray">
      <div className={style["Specialization__container-header"]}>
        <SectionHeader
          subheaderId={`${id}.subheader`}
          headerId={`${id}.me.header`}
        />
      </div>
    </Section>
  );
};

export default Specialization;
