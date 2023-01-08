import { FC } from "react";
import { useRecoilValue } from "recoil";
import cn from "classnames";

import {
  Header,
  Text,
  Slider,
  Slide,
  TagsGrid,
  Tags,
  List,
} from "components/ui";

import { CAREER_PATH_SLIDER } from "engine/state";

import { ICareerPathSliderProps } from ".";

import styles from "./CareerPathSlider.module.scss";

export const CareerPathSlider: FC<ICareerPathSliderProps> = (props) => {
  const activeSlide = useRecoilValue(CAREER_PATH_SLIDER);

  return (
    <Slider activeSlide={`career-path-slide-${activeSlide}`}>
      {Array.from(props.sliders, (_, i) => (
        <Slide key={`career-path-slide-${i}`}>
          <Header
            className={styles["CareerPathSlider__text-header"]}
            id={`${props.id}.card.${i}.header`}
          />
          <Text
            size="m"
            className={styles["CareerPathSlider__text-subheader"]}
            id={`${props.id}.card.${i}.subheader`}
          />
          <Text
            size="m"
            className={styles["CareerPathSlider__text-description"]}
            id={`${props.id}.card.${i}.description`}
          />
          <TagsGrid
            className={
              styles["CareerPathSlider__right_side__wrapper-slide-tags"]
            }
          >
            {Array.from(Array(props.tagsCount[i]), (_, ti) => (
              <Tags
                key={`career-path-card-${i}-tags-${ti}`}
                id={`${props.id}.card.${i}.language.${ti}`}
              />
            ))}
          </TagsGrid>
          <div className={styles.CareerPathSlider__separator} />
          <List id={`${props.id}.card.${i}.list`} iteration={[5, 2, 1][i]} />
        </Slide>
      ))}
    </Slider>
  );
};
