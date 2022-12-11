import React from "react";

import { Card, Header, TagsGrid, Tags } from "..";

import style from "./style.module.scss";

interface IMyWorksCard {
  headerId: string;
  tagsId: string;
  tagsCount: number;
}

const MyWorksCard: React.FC<IMyWorksCard> = ({
  headerId,
  tagsCount,
  tagsId,
}) => {
  return (
    <Card type="border" className={style.MyWorksCard}>
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
