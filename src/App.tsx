import React from "react";

import { About, Header, MyWorks, Specialization } from "./components/sections";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Specialization />
      <MyWorks />
    </>
  );
};

export default App;
