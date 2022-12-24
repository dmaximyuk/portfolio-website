export type TTextSize = "s" | "m" | "l" | "xl";

export interface ITextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  id: string;
  size?: TTextSize;
  values?: { [key: string]: string | number };
}
