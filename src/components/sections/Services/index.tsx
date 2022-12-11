import React from "react";

import { CardGrid, Section, SectionHeader, ServicesCard } from "../../ui";

import style from "./style.module.scss";

import IconWebDev from "../../../assets/icons/services/shape.svg";
import IconBackend from "../../../assets/icons/services/layers.svg";
import IconMobileDev from "../../../assets/icons/services/crown.svg";

interface IServices {}

const Services: React.FC<IServices> = () => {
  const id = "section.services";
  const images = [IconWebDev, IconBackend, IconMobileDev];

  return (
    <Section className={style.Services} type="gray">
      <SectionHeader
        className={style.Services__header}
        subheaderId={`${id}.subheader`}
        headerId={`${id}.header`}
      />
      <CardGrid iteration={3}>
        {(_, i) => {
          return (
            <ServicesCard
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

export default Services;
