import React from "react";

import { About, Header, Specialization } from "./components/sections";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Specialization />
    </>
  );
};

export default App;
