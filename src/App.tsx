import React from "react";

import { About, Header, MyWorks, Services } from "./components/sections";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <MyWorks />
    </>
  );
};

export default App;
