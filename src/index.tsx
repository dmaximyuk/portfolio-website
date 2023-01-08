import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

import { App } from "./App";
import { LocaleProvider } from "./components/ui";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </RecoilRoot>
  </React.StrictMode>
);
