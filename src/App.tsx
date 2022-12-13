import React from "react";

import {
  About,
  Header,
  MyWorks,
  Services,
  CareerPath,
} from "./components/sections";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <MyWorks />
      <CareerPath />
    </>
  );
};

export default App;
