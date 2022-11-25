import React from "react";

import { Header, Text, Section, Subheader, SocialIcons } from "../../ui";

import style from "./style.module.scss";

interface IAbout {}

const About: React.FC<IAbout> = () => {
  const id = "section.about";

  return (
    <Section className={style.About} type="white">
      <div className={style["About__container-text"]}>
        <Subheader id={`${id}.subheader`} />
        <Header id={`${id}.me.header`} className={style.About__header} />
        <Text id={`${id}.me.text`} values={{ exp: 2 }} />
        <SocialIcons />
      </div>
      <div className={style["About__container-image"]}>
        <img src="https://via.placeholder.com/336x400" alt=""></img>
      </div>
    </Section>
  );
};

export default About;
