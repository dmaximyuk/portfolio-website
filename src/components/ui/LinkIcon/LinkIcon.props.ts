export interface ILinkIconProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLLinkElement>,
    HTMLLinkElement
  > {
  icon: React.ReactNode;
  href: string;
}
