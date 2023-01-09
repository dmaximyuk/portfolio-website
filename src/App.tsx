import { FC, useEffect } from "react";
import { useSetRecoilState } from "recoil";

import {
  About,
  Header,
  MyWorks,
  Services,
  CareerPath,
  Footer,
  LearningPath,
} from "./components/sections";

import { WINDOW_SCROLL } from "engine/state";

export const App: FC = () => {
  const setWindow = useSetRecoilState(WINDOW_SCROLL);

  const scroll = (e: Event) => {
    setWindow(e);
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
