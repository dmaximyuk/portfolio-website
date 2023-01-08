import { TSectionType } from "components/ui";

export interface ICareerPathProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  type: TSectionType;
}
