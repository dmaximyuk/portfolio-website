import { FC, useEffect } from "react";

import {
  About,
  Header,
  MyWorks,
  Services,
  CareerPath,
  Footer,
  LearningPath,
} from "./components/sections";

export const App: FC = () => {
  const scroll = (e: Event) => {
    console.log(e);
  };

  // * Scroll Tracking
  useEffect(() => {
    window.addEventListener("scroll", scroll, false);
    return () => window.removeEventListener("scroll", scroll, false);
  }, []);

  return (
    <>
      <Header type="white" />
      <About type="white" />
      <Services type="gray" />
      <MyWorks type="white" />
      <CareerPath type="gray" />
      <LearningPath type="white" />
      <Footer type="gray" />
    </>
  );
};
