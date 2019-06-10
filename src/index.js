import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import { App } from "./components/App";

const store = createStore(reducer);

// SSR (Server Side Rendering) safe
if (document != null) {
    // Cookies for Landing Page
    const visited = checkVistiedCookie();
    if (!visited) {
        setVisitedCookie();
    }

    ReactDOM.render(
        <Provider store={store}>
            <App visited={visited} />
        </Provider>,
        document.getElementById("root")
    );

    // HMR (Hot Module Replacement)
    if (module.hot) {
        module.hot.accept();
    }
}

// Cookie Utilities
function setVisitedCookie() {
    var date = new Date();
    date.setTime(date.getTime() + 2 * 24 * 60 * 60 * 1000);
    var expires = "expires=" + date.toUTCString();
    document.cookie = "visited=true;" + expires + ";path=/";
}

function checkVistiedCookie() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        if (cookies[i].trim() == "visited=true") {
            return true;
        }
    }
    return false;
}
