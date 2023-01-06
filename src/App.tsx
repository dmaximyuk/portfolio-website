import React from "react";

import {
  About,
  Header,
  MyWorks,
  Services,
  CareerPath,
  Footer,
} from "./components/sections";
// import { ScrollToTop } from "./components/ui";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <MyWorks />
      <CareerPath />
      <Footer />
      {/* <ScrollToTop /> */}
    </>
  );
};
