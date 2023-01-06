import { FC } from "react";
import { useIntl } from "react-intl";

import { Text, Section, SocialIcons, SectionHeader } from "../../ui";

import AboutPhoto from "../../../assets/photos/about_3.jpg";

import { IAboutProps } from ".";

import styles from "./About.module.scss";

export const About: FC<IAboutProps> = (props) => {
  const id = "section.about";
  const intl = useIntl();
  const userName = intl.formatMessage({ id: `${id}.me.text` });
  const userExp = "2";

  return (
    <Section id="about" className={styles.About} type="white">
      <div className={styles["About__container-text"]}>
        <SectionHeader
          subheaderId={`${id}.subheader`}
          headerId={`${id}.me.header`}
        />
        <Text>{userName.replace(/{exp}/, userExp)}</Text>
        <SocialIcons />
      </div>
      <div className={styles["About__container-image"]}>
        <img src={AboutPhoto} alt=""></img>
      </div>
    </Section>
  );
};
