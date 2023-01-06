import { ReactElement } from "react";

export interface ISliderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  activeSlide: string;
  children: Array<ReactElement>;
}
