import { TSectionType } from "components/ui";

export interface ILearningPathProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  type: TSectionType;
}
