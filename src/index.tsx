import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux/es/exports";
import { store }  from "./store/store"

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ColorModeScript />
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

serviceWorker.unregister();

reportWebVitals();
