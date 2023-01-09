import { FC } from "react";
import { useIntl } from "react-intl";

import { SocialIcons } from "components/blocks";
import { Text, Section, SectionHeader } from "components/ui";

import { ME_EXPERIENCE } from "engine/state";

import AboutPhoto from "assets/photos/about_3.jpg";

import { IAboutProps } from ".";

import styles from "./About.module.scss";

export const About: FC<IAboutProps> = (props) => {
  const id = "section.about";
  const intl = useIntl();
  const userName = intl.formatMessage({ id: `${id}.me.text` });

  return (
    <Section id="about" className={styles.About} type="white">
      <div className={styles["About__container-text"]}>
        <SectionHeader
          subheaderId={`${id}.subheader`}
          headerId={`${id}.me.header`}
        />
        <Text>{userName.replace(/{exp}/, ME_EXPERIENCE)}</Text>
        <SocialIcons />
      </div>
      <div className={styles["About__container-image"]}>
        <img src={AboutPhoto} alt=""></img>
      </div>
    </Section>
  );
};
