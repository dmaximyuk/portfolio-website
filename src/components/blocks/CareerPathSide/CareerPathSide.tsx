import { FC } from "react";
import { useIntl } from "react-intl";
import { useRecoilState } from "recoil";
import cn from "classnames";

import { SectionHeader, Button } from "components/ui";

import { CAREER_PATH_SLIDER } from "engine/state";

import { ICareerPathSideProps } from ".";

import styles from "./CareerPathSide.module.scss";

export const CareerPathSide: FC<ICareerPathSideProps> = (props) => {
  const intl = useIntl();
  const [activeSlide, setActiveSlide] = useRecoilState(CAREER_PATH_SLIDER);

  return (
    <>
      <SectionHeader
        className={styles.CareerPathSide__header}
        headerId={`${props.id}.header`}
        subheaderId={`${props.id}.subheader`}
      />
      {Array.from(props.sliders, (_, i) => (
        <Button
          key={`career-path-button-${i}`}
          className={styles.CareerPathSide__button}
          type="filled"
          onClick={() => setActiveSlide(i)}
          isActive={activeSlide === i}
          isRippled
        >
          {intl.formatMessage({ id: `${props.id}.button.${i}` })}
        </Button>
      ))}
    </>
  );
};
