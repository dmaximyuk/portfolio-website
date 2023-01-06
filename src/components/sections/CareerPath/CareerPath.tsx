import { FC, useEffect, useState } from "react";
import { useIntl } from "react-intl";

import {
  Button,
  Column,
  Header,
  List,
  Section,
  SectionHeader,
  Slide,
  Slider,
  Tags,
  TagsGrid,
  Text,
} from "../../ui";

import { ICareerPathProps } from ".";

import styles from "./CareerPath.module.scss";

export const CareerPath: FC<ICareerPathProps> = (props) => {
  const id = "section.careerpath";
  const sliders = Array(3);
  const tags = [7, 7, 4];

  const intl = useIntl();
  const [activeSlide, setActiveSlide] = useState<number>(0);

  useEffect(() => {
    return () => setActiveSlide(0);
  }, []);

  const changeState = (i: number) => setActiveSlide(i);

  return (
    <Section id="experience" className={styles.CareerPath} type="gray">
      <Column
        side={
          <>
            <SectionHeader
              className={styles.CareerPath__header}
              headerId={`${id}.header`}
              subheaderId={`${id}.subheader`}
            />
            {Array.from(sliders, (_, i) => (
              <Button
                key={`career-path-button-${i}`}
                className={styles.CareerPath__button}
                type="filled"
                onClick={(e) => changeState(i)}
                isActive={activeSlide === i}
                isRippled
              >
                {intl.formatMessage({ id: `${id}.button.${i}` })}
              </Button>
            ))}
          </>
        }
      >
        <Slider activeSlide={`career-path-slide-${activeSlide}`}>
          {Array.from(sliders, (_, i) => (
            <Slide key={`career-path-slide-${i}`}>
              <Header
                className={styles["CareerPath__text-header"]}
                id={`${id}.card.${i}.header`}
              />
              <Text
                size="m"
                className={styles["CareerPath__text-subheader"]}
                id={`${id}.card.${i}.subheader`}
              />
              <Text
                size="m"
                className={styles["CareerPath__text-description"]}
                id={`${id}.card.${i}.description`}
              />
              <TagsGrid
                className={styles["CareerPath__right_side__wrapper-slide-tags"]}
              >
                {Array.from(Array(tags[i]), (_, ti) => (
                  <Tags
                    key={`career-path-card-${i}-tags-${ti}`}
                    id={`${id}.card.${i}.language.${ti}`}
                  />
                ))}
              </TagsGrid>
              <div className={styles.CareerPath__separator} />
              <List id={`${id}.card.${i}.list`} iteration={[5, 2, 1][i]} />
            </Slide>
          ))}
        </Slider>
      </Column>
    </Section>
  );
};
