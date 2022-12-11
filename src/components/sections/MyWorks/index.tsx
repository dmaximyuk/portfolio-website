import React from "react";

import { MyWorksCard, CardGrid, Section, SectionHeader } from "../../ui";

const MyWorks: React.FC = () => {
  const id = "section.myworks";

  return (
    <Section type="white">
      <SectionHeader
        headerId={`${id}.header`}
        subheaderId={`${id}.subheader`}
      />
      <CardGrid iteration={3}>
        {(_, i) => {
          return <MyWorksCard headerId={`${id}.card.${i}.header`} />;
        }}
      </CardGrid>
    </Section>
  );
};

export default MyWorks;
