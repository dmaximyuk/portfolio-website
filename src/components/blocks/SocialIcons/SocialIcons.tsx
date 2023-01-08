import { FC } from "react";
import { useRecoilValue } from "recoil";
import cn from "classnames";

import { LinkIcon } from "components/ui";

import { SOCIAL_ICONS_LINKS } from "engine/state";

import { ISocialIconsProps } from ".";

import styles from "./SocialIcons.module.scss";

export const SocialIcons: FC<ISocialIconsProps> = (props) => {
  const links = useRecoilValue(SOCIAL_ICONS_LINKS);

  return (
    <div className={cn(styles.SocialIcons, props.className)}>
      {links.map((el) => (
        <LinkIcon {...el} />
      ))}
    </div>
  );
};
