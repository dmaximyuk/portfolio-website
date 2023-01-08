export interface IServicesCardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  icon?: string;
  headerId: string;
  textId: string;
}
