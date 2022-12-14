import { TSectionType } from "components/ui";

export interface IServicesProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  type: TSectionType;
}
