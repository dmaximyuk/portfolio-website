import { FC } from "react";
import cn from "classnames";

import { Card, AdaptiveImage, Header, Tags, TagsGrid } from "components/ui";

import { IMyWorksCardProps } from ".";

import styles from "./MyWorksCard.module.scss";

export const MyWorksCard: FC<IMyWorksCardProps> = (props) => {
  return (
    <>
      <Card type="border" className={cn(styles.MyWorksCard, props.className)}>
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
            <Tags key={`myworks-card-tag-${i}`} id={`${props.tagsId}.${i}`} />
          ))}
        </TagsGrid>
      </Card>
    </>
  );
};
