import React from "react";

import { Text, Section, SocialIcons, SectionHeader } from "../../ui";

import AboutPhoto from "../../../assets/photos/about_2.jpg";

import style from "./style.module.scss";

interface IAbout {}

const About: React.FC<IAbout> = () => {
  const id = "section.about";

  return (
    <Section className={style.About} type="white">
      <div className={style["About__container-text"]}>
        <SectionHeader
          subheaderId={`${id}.subheader`}
          headerId={`${id}.me.header`}
        />
        <Text id={`${id}.me.text`} values={{ exp: 2 }} />
        <SocialIcons />
      </div>
      <div className={style["About__container-image"]}>
        <img src={AboutPhoto} alt=""></img>
      </div>
    </Section>
  );
};

export default About;
