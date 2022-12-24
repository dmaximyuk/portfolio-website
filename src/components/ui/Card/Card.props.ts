import React from "react";

export interface ICardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: React.ReactNode;
  type?: "default" | "border";
}
