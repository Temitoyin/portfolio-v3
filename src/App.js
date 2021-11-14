import React, {useEffect, useRef, useState} from "react";
import Home from './components/Home/Home'
import "./App.scss";
import gsap from "gsap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
let cursor = useRef(null);
const [mouseX, setMouseX] = useState(0)
const [mouseY, setMouseY] = useState(0)

 useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    });
    return {

    }
  }, [mouseX, mouseY])
  useEffect(() => {
        gsap.set(cursor.current, {
            css: {
            left: mouseX,
            top: mouseY 
            },
            ease: 'power2.in',
            duration: 1,
            delay: 0.1
        });

  }, [mouseX, mouseY])


  return (
    <Router>
      <div className='App' >
        <div className='container'>
          <div className='wrapper'>
            {/* <div className='home'> */}
              <Switch>
                <Route exact path='/' component={Home} />
              </Switch>
            {/* </div> */}
          </div>
          <div className="cursor" id='cursor' ref={cursor}></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
