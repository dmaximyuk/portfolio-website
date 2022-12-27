import { FC } from "react";

import { Section, SectionHeader } from "../../ui";

import { ICareerPathProps } from ".";

import styles from "./CareerPath.module.scss";

export const CareerPath: FC<ICareerPathProps> = (props) => {
  const id = "section.careerpath";

  return (
    <Section {...props} type="gray">
      <SectionHeader
        className={styles.CareerPath__header}
        headerId={`${id}.header`}
        subheaderId={`${id}.subheader`}
      />
    </Section>
  );
};
