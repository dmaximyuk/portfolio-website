import React from "react";

import { MyWorksCard, CardGrid, Section, SectionHeader } from "../../ui";

import style from "./style.module.scss";

import LandingPhoto from "../../../assets/photos/landing.png";
import DashboardPhoto from "../../../assets/photos/dashboard.png";
import ShopPhoto from "../../../assets/photos/shop.png";

const MyWorks: React.FC = () => {
  const id = "section.myworks";
  const cardsTags = [1, 2, 1];
  const images = [LandingPhoto, DashboardPhoto, ShopPhoto];

  return (
    <Section type="white">
      <SectionHeader
        className={style.MyWorks__header}
        headerId={`${id}.header`}
        subheaderId={`${id}.subheader`}
      />
      <CardGrid iteration={3}>
        {(_, i) => {
          return (
            <MyWorksCard
              src={images[i]}
              headerId={`${id}.card.${i}.header`}
              tagsCount={cardsTags[i]}
              tagsId={`${id}.card.${i}.technology`}
            />
          );
        }}
      </CardGrid>
    </Section>
  );
};

export default MyWorks;
