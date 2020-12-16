import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "jotai";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <React.Suspense fallback={<div>I'm chippin in</div>}>
        <App />
      </React.Suspense>
    </Provider>
  </React.StrictMode>,
  rootElement
);
