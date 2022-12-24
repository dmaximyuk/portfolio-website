export type TMousePosition = undefined | { x: number; y: number };

export interface IMouseProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  isVisible: boolean;
  cursorPosition: TMousePosition;
}
