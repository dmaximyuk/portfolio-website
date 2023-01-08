import { FC } from "react";

import { Column, Section } from "components/ui";
import { CareerPathSide, CareerPathSlider } from "components/blocks";

import { ICareerPathProps } from ".";

import styles from "./CareerPath.module.scss";

export const CareerPath: FC<ICareerPathProps> = (props) => {
  const id = "section.careerpath";
  const sliders = Array(3);
  const tags = [7, 7, 4];

  return (
    <Section id="experience" className={styles.CareerPath} type={props.type}>
      <Column side={<CareerPathSide id={id} sliders={sliders} />}>
        <CareerPathSlider id={id} sliders={sliders} tagsCount={tags} />
      </Column>
    </Section>
  );
};
