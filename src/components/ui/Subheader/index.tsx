import React from "react";
import cn from "classnames";
import { FormattedMessage } from "react-intl";

import style from "./style.module.scss";

interface ISubheader {
  className?: string;
  id: string;
}

const Subheader: React.FC<ISubheader> = ({ className, id }) => {
  return (
    <FormattedMessage id={id}>
      {(str) => <h3 className={cn(style.Subheader, className)}>{str}</h3>}
    </FormattedMessage>
  );
};

export default Subheader;
