import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from "./reducers";
import { App } from "./components/App";

const store = createStore(reducer);

// SSR (Server Side Rendering) safe
if (document != null) {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));

    // HMR (Hot Module Replacement)
    if (module.hot) {
        module.hot.accept();
    }
}
