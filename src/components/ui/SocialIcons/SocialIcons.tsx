import { FC } from "react";
import cn from "classnames";

import { LinkIcon } from "..";

import { ISocialIconsProps } from ".";

import styles from "./SocialIcons.module.scss";

export const SocialIcons: FC<ISocialIconsProps> = (props) => {
  const links = [
    {
      key: "tg",
      href: "https://t.me/d_maximyuk",
      icon: <p>TG</p>,
    },
    {
      key: "vk",
      href: "https://vk.com/d_maximyuk",
      icon: <p>VK</p>,
    },
    {
      key: "gh",
      href: "https://github.com/dmaximyuk",
      icon: <p>GH</p>,
    },
    {
      key: "hh",
      href: "https://hh.ru/resume/f5f7a20bff0b2688420039ed1f3069454f6135",
      icon: <p>HH</p>,
    },
  ];

  return (
    <div className={cn(styles.SocialIcons, props.className)}>
      {links.map((el) => (
        <LinkIcon {...el} />
      ))}
    </div>
  );
};
