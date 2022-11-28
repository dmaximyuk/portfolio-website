import React from "react";
import cn from "classnames";
import { FormattedMessage } from "react-intl";

import { TSize } from "../../../engine/types";

import style from "./style.module.scss";

interface IText {
  className?: string;
  size?: TSize;
  id: string;
  values?: { [key: string]: string | number };
}

const Text: React.FC<IText> = ({ className, size = "l", id, values }) => {
  return (
    <FormattedMessage id={id} values={values}>
      {(str) => (
        <h1
          className={cn(
            {
              [style.Text]: true,
              [style[`Text_size-${size}`]]: true,
            },
            className
          )}
        >
          {str}
        </h1>
      )}
    </FormattedMessage>
  );
};

export default Text;
