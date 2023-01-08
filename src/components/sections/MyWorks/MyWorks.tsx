import { FC } from "react";

import { MyWorksCard } from "components/blocks";
import { CardGrid, Section, SectionHeader } from "components/ui";

import LandingPhoto from "assets/photos/landing.png";
import DashboardPhoto from "assets/photos/dashboard.png";
import ShopPhoto from "assets/photos/shop.png";

import { IMyWorksProps } from ".";

import styles from "./MyWorks.module.scss";

export const MyWorks: FC<IMyWorksProps> = (props) => {
  const id = "section.myworks";
  const images = [LandingPhoto, DashboardPhoto, ShopPhoto];

  return (
    <Section id="portfolio" type={props.type}>
      <SectionHeader
        className={styles.MyWorks__header}
        headerId={`${id}.header`}
        subheaderId={`${id}.subheader`}
      />
      <CardGrid iteration={3}>
        {(_, i) => {
          return (
            <MyWorksCard
              key={`my-works-card-id${i}`}
              src={images[i]}
              headerId={`${id}.card.${i}.header`}
              tagsCount={1}
              tagsId={`${id}.card.${i}.technology`}
            />
          );
        }}
      </CardGrid>
    </Section>
  );
};
