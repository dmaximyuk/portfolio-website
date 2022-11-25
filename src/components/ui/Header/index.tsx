import React from "react";
import cn from "classnames";
import { FormattedMessage } from "react-intl";

import style from "./style.module.scss";

interface IHeader {
  className?: string;
  id: string;
}

const Header: React.FC<IHeader> = ({ className, id }) => {
  return (
    <FormattedMessage id={id}>
      {(str) => <h1 className={cn(style.Header, className)}>{str}</h1>}
    </FormattedMessage>
  );
};

export default Header;
