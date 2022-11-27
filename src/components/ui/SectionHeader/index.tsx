import React from "react";

import { Header, Subheader } from "..";

import style from "./style.module.scss";

interface ISectionHeader {
  className?: string;
  headerId: string;
  subheaderId: string;
}

const SectionHeader: React.FC<ISectionHeader> = ({
  headerId,
  subheaderId,
  ...props
}) => {
  return (
    <div {...props}>
      <Subheader id={subheaderId} />
      <Header id={headerId} className={style.SectionHeader} size="xl" />
    </div>
  );
};

export default SectionHeader;
