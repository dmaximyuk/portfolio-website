import { TSectionIds } from "..";

export interface IScrollToProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  to: TSectionIds;
}
