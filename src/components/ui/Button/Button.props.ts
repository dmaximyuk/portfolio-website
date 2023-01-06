export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  type?: "default" | "filled";
  isRippled?: boolean;
  isActive?: boolean;
}
