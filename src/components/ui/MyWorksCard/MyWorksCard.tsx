import { FC, useState } from "react";
import cn from "classnames";

import { Card, AdaptiveImage, Header, Tags, Mouse, TagsGrid } from "..";

import { IMyWorksCardProps } from ".";
import { TMousePosition } from "..";

import styles from "./MyWorksCard.module.scss";

export const MyWorksCard: FC<IMyWorksCardProps> = (props) => {
  const [cursorPosition, setCursorPosition] =
    useState<TMousePosition>(undefined);
  const [isCursorVisible, setCursorVisible] = useState<boolean>(false);

  return (
    <>
      <Card
        type="border"
        style={{ cursor: isCursorVisible ? "none" : "default" }}
        className={cn(styles.MyWorksCard, props.className)}
        onMouseEnter={(e) => {
          setCursorVisible(true);
          setCursorPosition({ x: e.clientX, y: e.clientY });
        }}
        onMouseLeave={() => setCursorVisible(false)}
      >
        {isCursorVisible && (
          <>
            <div
              className={styles["MyWorksCard__mouse-overlay"]}
              onMouseMove={(e) =>
                setCursorPosition({ x: e.clientX, y: e.clientY })
              }
              onMouseLeave={(e) => setCursorPosition(undefined)}
            />
            <Mouse
              className={styles.MyWorksCard__mouse}
              isVisible={!!cursorPosition}
              cursorPosition={cursorPosition}
            />
          </>
        )}

        <AdaptiveImage
          className={styles.MyWorksCard__img}
          imagePosition="lt"
          src={props.src}
        />

        <div className={styles["MyWorksCard__container-header"]}>
          <Header className={styles.MyWorksCard__header} id={props.headerId} />
          <span className={styles["MyWorksCard__header-arrow"]}>&#8594;</span>
        </div>

        <TagsGrid className={styles.MyWorksCard__tags}>
          {Array.from(Array(props.tagsCount), (_, i) => (
            <Tags id={`${props.tagsId}.${i}`} />
          ))}
        </TagsGrid>
      </Card>
    </>
  );
};
