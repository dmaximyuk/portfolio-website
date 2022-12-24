export interface ISectionHeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  headerId: string;
  subheaderId: string;
}
