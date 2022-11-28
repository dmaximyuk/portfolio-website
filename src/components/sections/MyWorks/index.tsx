import React from "react";

import { Section, SectionHeader } from "../../ui";

interface IMyWorks {}

const MyWorks: React.FC<IMyWorks> = ({}) => {
  const id = "section.myworks";

  return (
    <Section type="white">
      <SectionHeader
        headerId={`${id}.header`}
        subheaderId={`${id}.subheader`}
      />
    </Section>
  );
};

export default MyWorks;
