import { FC } from "react";
import cn from "classnames";

import { LinkIcon } from "components/ui";

import { SOCIAL_ICONS_LINKS } from "engine/state";

import { ISocialIconsProps } from ".";

import styles from "./SocialIcons.module.scss";

export const SocialIcons: FC<ISocialIconsProps> = (props) => {
  return (
    <div className={cn(styles.SocialIcons, props.className)}>
      {SOCIAL_ICONS_LINKS.map((el) => (
        <LinkIcon {...el} />
      ))}
    </div>
  );
};
