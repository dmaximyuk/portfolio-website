import React from "react";

import { Card, Header, TagsGrid, Tags, AdaptiveImage } from "..";

import style from "./style.module.scss";

interface IMyWorksCard {
  headerId: string;
  tagsId: string;
  tagsCount: number;
  src: string;
}

const MyWorksCard: React.FC<IMyWorksCard> = ({
  headerId,
  tagsCount,
  tagsId,
  src,
}) => {
  return (
    <Card type="border" className={style.MyWorksCard}>
      <AdaptiveImage
        className={style.MyWorksCard__img}
        imagePosition="lt"
        src={src}
      />

      <div className={style["MyWorksCard__container-header"]}>
        <Header className={style.MyWorksCard__header} id={headerId} />
        <span className={style["MyWorksCard__header-arrow"]}>&#8594;</span>
      </div>

      <TagsGrid className={style.MyWorksCard__tags}>
        {Array.from(Array(tagsCount), (_, i) => (
          <Tags id={`${tagsId}.${i}`} />
        ))}
      </TagsGrid>
    </Card>
  );
};

export default MyWorksCard;
