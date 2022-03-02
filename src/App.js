import React, { useEffect, useRef, useState } from "react";
import Home from "./components/Home/Home";
import "./App.scss";
import gsap from "gsap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // let cursor = useRef(null);

  // useEffect(() => {
  //   window.document.addEventListener("mousemove", (event) => {
  //     gsap.set(cursor.current, {
  //       css: {
  //         left: event.clientX,
  //         top: event.clientY,
  //       },
  //       duration: 0.016,
  //     });
  //   });
  // });

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
