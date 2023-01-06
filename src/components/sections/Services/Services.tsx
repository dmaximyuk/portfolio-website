import { FC } from "react";

import { CardGrid, Section, SectionHeader, ServicesCard } from "../../ui";

import { IServicesProps } from ".";

import IconWebDev from "../../../assets/icons/services/shape.svg";
import IconBackend from "../../../assets/icons/services/layers.svg";
import IconMobileDev from "../../../assets/icons/services/crown.svg";

import styles from "./Services.module.scss";

export const Services: FC<IServicesProps> = (props) => {
  const id = "section.services";
  const images = [IconWebDev, IconBackend, IconMobileDev];

  return (
    <Section id="services" className={styles.Services} type="gray">
      <SectionHeader
        className={styles.Services__header}
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
