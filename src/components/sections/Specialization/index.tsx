import React from "react";

import { Header, Text, Section, Subheader, SocialIcons } from "../../ui";

import style from "./style.module.scss";

interface ISpecialization {}

const Specialization: React.FC<ISpecialization> = () => {
  const id = "section.specialization";

  return (
    <Section className={style.Specialization} type="gray">
      <div className={style["Specialization__container-header"]}>
        <div>
          <Subheader id={`${id}.subheader`} />
          <Header
            id={`${id}.me.header`}
            className={style.Specialization__header}
          />
        </div>
      </div>
    </Section>
  );
};

export default Specialization;
