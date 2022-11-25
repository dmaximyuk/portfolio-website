import React from "react";
import cn from "classnames";
import { FormattedMessage } from "react-intl";

import style from "./style.module.scss";

interface IText {
  className?: string;
  id: string;
  values?: { [key: string]: string | number };
}

const Text: React.FC<IText> = ({ className, id, values }) => {
  return (
    <FormattedMessage id={id} values={values}>
      {(str) => <h1 className={cn(style.Text, className)}>{str}</h1>}
    </FormattedMessage>
  );
};

export default Text;
