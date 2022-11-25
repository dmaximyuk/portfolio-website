import React from "react";
import { ReactSVG } from "react-svg";

import { Header, Text, Section, Subheader, Icons } from "../../ui";

import TgIcon from "../../../assets/icons/telegram.svg";
import VkIcon from "../../../assets/icons/vk.svg";
import GhIcon from "../../../assets/icons/github.svg";

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

        <div className={style["About__container-social"]}>
          <Icons key="tg-icon" src={<ReactSVG src={TgIcon} />} />
          <Icons key="vk-icons" src={<ReactSVG src={VkIcon} />} />
          <Icons key="gh-icons" src={<ReactSVG src={GhIcon} />} />
        </div>
      </div>
      <div className={style["About__container-image"]}>
        <img src="https://via.placeholder.com/336x400" alt=""></img>
      </div>
    </Section>
  );
};

export default About;
