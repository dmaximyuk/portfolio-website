export interface IAdaptiveImageProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  imagePosition?: "lt" | "c";
  src: string;
}
