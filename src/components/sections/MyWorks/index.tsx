import React from "react";

import { MyWorksCard, CardGrid, Section, SectionHeader } from "../../ui";

const MyWorks: React.FC = () => {
  const id = "section.myworks";
  const cardsTags = [1, 2, 1];

  return (
    <Section type="white">
      <SectionHeader
        headerId={`${id}.header`}
        subheaderId={`${id}.subheader`}
      />
      <CardGrid iteration={3}>
        {(_, i) => {
          return (
            <MyWorksCard
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
