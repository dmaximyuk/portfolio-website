export interface ICareerPathSliderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  sliders: Array<number>;
  tagsCount: Array<number>;
}
