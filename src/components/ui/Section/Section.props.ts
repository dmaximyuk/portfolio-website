export type TSectionIds =
  | "about"
  | "services"
  | "portfolio"
  | "experience"
  | "blog";

export interface ISectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  id: TSectionIds;
  type: "white" | "gray";
}
