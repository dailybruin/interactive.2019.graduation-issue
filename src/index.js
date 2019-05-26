import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";

// SSR (Server Side Rendering) safe
if (document != null) {
    ReactDOM.render(<App />, document.getElementById("root"));

    // HMR (Hot Module Replacement)
    if (module.hot) {
        module.hot.accept();
    }
}
