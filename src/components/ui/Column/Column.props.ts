import { ReactNode } from "react";
export interface IColumnProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  side: ReactNode;
}
