import { FC } from "react";
import cn from "classnames";

import { SocialIcons } from "components/blocks";
import { Text } from "components/ui";

import { IFooterProps } from ".";

import styles from "./Footer.module.scss";

export const Footer: FC<IFooterProps> = (props) => {
  return (
    <footer
      {...props}
      className={cn(
        styles.Footer,
        styles[`Footer_type-${props.type}`],
        props.className
      )}
    >
      <SocialIcons className={styles.Footer__socials} />
      <Text className={styles.Footer__text} id="footer.text" size="s" />
    </footer>
  );
};
