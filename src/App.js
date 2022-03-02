import React from "react";
import Home from "./components/Home/Home";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="wrapper">
            {/* <div className='home'> */}
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
            {/* </div> */}
          </div>
          {/* <div className="cursor" id="cursor" ref={cursor}></div> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
