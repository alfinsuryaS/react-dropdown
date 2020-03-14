import * as React from "react";
import { hot } from "react-hot-loader";

import "./../assets/scss/App.scss";
import { Dropdown } from './shared/Dropdown';

const App = () => (
    <div className="app">
        <Dropdown/>
    </div>
)


declare let module: object;

export default hot(module)(App);
