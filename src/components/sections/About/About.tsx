import { FC } from "react";

import { Text, Section, SocialIcons, SectionHeader } from "../../ui";

import AboutPhoto from "../../../assets/photos/about_3.jpg";

import { IAboutProps } from ".";

import styles from "./About.module.scss";

export const About: FC<IAboutProps> = (props) => {
  const id = "section.about";

  return (
    <Section {...props} className={styles.About} type="white">
      <div className={styles["About__container-text"]}>
        <SectionHeader
          subheaderId={`${id}.subheader`}
          headerId={`${id}.me.header`}
        />
        <Text id={`${id}.me.text`} values={{ exp: 2 }} />
        <SocialIcons />
      </div>
      <div className={styles["About__container-image"]}>
        <img src={AboutPhoto} alt=""></img>
      </div>
    </Section>
  );
};
