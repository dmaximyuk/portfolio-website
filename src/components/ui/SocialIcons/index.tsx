import React from "react";
// import { ReactSVG } from "react-svg";

import { LinkedIcon } from "..";

import style from "./style.module.scss";

// import TgIcon from "../../../assets/icons/telegram.svg";
// import VkIcon from "../../../assets/icons/vk.svg";
// import GhIcon from "../../../assets/icons/github.svg";

interface ISocialIcons {}
// ! TODO: search and add icons

const SocialIcons: React.FC<ISocialIcons> = () => {
  return (
    <div className={style.SocialIcons}>
      {/* <Icons key="tg-icon" src={<ReactSVG src={TgIcon} />} />
    <Icons key="vk-icons" src={<ReactSVG src={VkIcon} />} />
    <Icons key="gh-icons" src={<ReactSVG src={GhIcon} />} /> */}
      <LinkedIcon
        key="tg-icon"
        href="https://t.me/d_maximyuk"
        src={<p>TG</p>}
      />
      <LinkedIcon
        key="vk-icons"
        href="https://vk.com/d_maximyuk"
        src={<p>VK</p>}
      />
      <LinkedIcon
        key="gh-icons"
        href="https://github.com/dmaximyuk"
        src={<p>GH</p>}
      />
      <LinkedIcon
        key="hh-icons"
        href="https://hh.ru/resume/f5f7a20bff0b2688420039ed1f3069454f6135"
        src={<p>HH</p>}
      />
    </div>
  );
};

export default SocialIcons;
