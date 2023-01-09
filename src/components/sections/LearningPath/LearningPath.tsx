import { FC } from "react";
import cn from "classnames";

import {
  Column,
  ProgressBar,
  Section,
  SectionHeader,
  Text,
} from "components/ui";

import { ME_EXPERIENCE } from "engine/state";

import { ILearningPathProps } from ".";

import styles from "./LearningPath.module.scss";

export const LearningPath: FC<ILearningPathProps> = (props) => {
  const id = "section.learningpath";

  return (
    <Section
      id="skills"
      className={cn(styles.LearningPath, props.className)}
      type={props.type}
    >
      <SectionHeader
        headerId={`${id}.header`}
        subheaderId={`${id}.subheader`}
      />
      <Column side={<p>123</p>}>
        <Text
          className={styles.LearningPath__text}
          id={`${id}.skill.text`}
          values={{ exp: ME_EXPERIENCE }}
        />

        <Text size="m" id={`${id}.skill.0`} />
        <ProgressBar
          className={styles.LearningPath__progressbar}
          current={80}
        />
        <Text size="m" id={`${id}.skill.1`} />
        <ProgressBar
          className={styles.LearningPath__progressbar}
          current={75}
        />
        <Text size="m" id={`${id}.skill.2`} />
        <ProgressBar
          className={styles.LearningPath__progressbar}
          current={60}
        />
      </Column>
    </Section>
  );
};
