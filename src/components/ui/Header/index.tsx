import React from "react";
import cn from "classnames";
import { FormattedMessage } from "react-intl";

import { TSize } from "../../../engine/types";

import style from "./style.module.scss";

interface IHeader {
  className?: string;
  size?: TSize;
  id: string;
}

const Header: React.FC<IHeader> = ({ className, size = "m", id }) => {
  return (
    <FormattedMessage id={id}>
      {(str) => (
        <h1
          className={cn(
            {
              [style.Header]: true,
              [style[`Header_size-${size}`]]: true,
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

export default Header;
