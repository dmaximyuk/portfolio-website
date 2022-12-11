import React from "react";

import { Card, CardGrid, Section, SectionHeader } from "../../ui";

interface IMyWorks {}

const MyWorks: React.FC<IMyWorks> = ({}) => {
  const id = "section.myworks";

  return (
    <Section type="white">
      <SectionHeader
        headerId={`${id}.header`}
        subheaderId={`${id}.subheader`}
      />
      <CardGrid iteration={3}>
        {(_, i) => {
          return (
            <Card>
              <>123</>
            </Card>
          );
        }}
      </CardGrid>
    </Section>
  );
};

export default MyWorks;
