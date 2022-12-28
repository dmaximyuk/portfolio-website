import { FC, useEffect, useState } from "react";
import { useIntl } from "react-intl";

import { Button, Header, Section, SectionHeader, Text } from "../../ui";

import { ICareerPathProps } from ".";

import styles from "./CareerPath.module.scss";

export const CareerPath: FC<ICareerPathProps> = (props) => {
  const id = "section.careerpath";

  const intl = useIntl();
  const [activeCard, setActiveCard] = useState<number>(0);

  useEffect(() => {
    return () => setActiveCard(0);
  }, []);

  const changeState = (i: number) => setActiveCard(i);

  return (
    <Section {...props} className={styles.CareerPath} type="gray">
      <div className={styles.CareerPath__container}>
        <div className={styles.CareerPath__left_side}>
          <SectionHeader
            className={styles.CareerPath__header}
            headerId={`${id}.header`}
            subheaderId={`${id}.subheader`}
          />
          {Array.from(Array(3), (_, i) => (
            <Button
              key={`career-path-button-${i}`}
              className={styles.CareerPath__button}
              type="filled"
              onClick={(e) => changeState(i)}
              isActive={activeCard === i}
            >
              {intl.formatMessage({ id: `${id}.button.${i}` })}
            </Button>
          ))}
        </div>
        <div className={styles.CareerPath__right_side}>
          <Header id={`${id}.card.${activeCard}.header`} />
          <Text id={`${id}.card.${activeCard}.subheader`} />
          <Text id={`${id}.card.${activeCard}.description`} />
          <Text id={`${id}.card.${activeCard}.text`} />
        </div>
      </div>
    </Section>
  );
};
