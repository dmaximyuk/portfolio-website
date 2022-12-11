import React from "react";

import { Text } from "../";

import style from "./style.module.scss";

interface ITags {
  id: string;
}

const Tags: React.FC<ITags> = ({ id }) => {
  return (
    <div className={style.Tags}>
      <Text className={style.Tags__text} size="s" id={id} />
    </div>
  );
};

export default Tags;
