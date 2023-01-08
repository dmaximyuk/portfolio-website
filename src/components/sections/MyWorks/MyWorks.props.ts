import { TSectionType } from "components/ui";

export interface IMyWorksProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  type: TSectionType;
}
