export interface ICardGridProps {
  className?: string;
  iteration: number;
  children: (v: any, k: number) => React.ReactNode;
}
