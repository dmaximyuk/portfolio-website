export interface IIconButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isDisabled: boolean;
  isButton?: boolean;
  src?: string;
}
