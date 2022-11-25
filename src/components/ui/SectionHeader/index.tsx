import React from "react";
import { FormattedMessage } from "react-intl";

import { Header } from "..";

interface ISectionHeader {
  headerId: string;
  subHeaderId: string;
}

const SectionHeader: React.FC<ISectionHeader> = ({ headerId, subHeaderId }) => {
  return (
    <div>
      <FormattedMessage>{(str) => <h3>{str}</h3>}</FormattedMessage>
      <Header id={headerId} />
    </div>
  );
};

export default SectionHeader;
