import { TSectionType } from "components/ui";

export interface IFooterProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  type: TSectionType;
}
