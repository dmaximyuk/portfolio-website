import { FC, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import cn from "classnames";

import { Logo } from "components/blocks";
import { Button, Container, ScrollTo, TSectionIds } from "components/ui";

import { IHeaderProps } from ".";

import styles from "./Header.module.scss";

export const Header: FC<IHeaderProps> = (props) => {
  const [isScrolled, setScrolledStatus] = useState<boolean>(false);
  const intl = useIntl();

  const id = "header";
  const links: Array<TSectionIds> = [
    "services",
    "portfolio",
    "experience",
    "skills",
  ];

  return (
    <header
      {...props}
      id="header"
      className={cn(styles.Header, props.className)}
    >
      <div
        className={cn(
          styles.Header__inherit,
          isScrolled && styles.Header__inherit_active,
          styles[`Header__inherit_type-${props.type}`]
        )}
      >
        <Container className={styles.Header__container}>
          <Logo />
          <div className={styles.Header__links}>
            {Array.from(Array(links.length), (_, i) => {
              return (
                <ScrollTo key={`header-center-link-${i}`} to={links[i]}>
                  {intl.formatMessage({
                    id: `${id}.navigation.button.center.title.${i}`,
                  })}
                </ScrollTo>
              );
            })}
          </div>
          <div>
            <Button isRippled>Resume</Button>
          </div>
        </Container>
      </div>
    </header>
  );
};
