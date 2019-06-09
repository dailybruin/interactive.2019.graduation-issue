import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import { App } from "./components/App";

const store = createStore(reducer);

// SSR (Server Side Rendering) safe
if (document != null) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    );

    // HMR (Hot Module Replacement)
    if (module.hot) {
        module.hot.accept();
    }

    // Cookies for Landing Page
    if (checkVistiedCookie()) {
        document.getElementById("LandingPage").style.display = "none";
    }
    setVisitedCookie();
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
        if (cookies[i] == "visited=true") {
            return true;
        }
    }
    return false;
}
