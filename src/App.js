import Lenis from "@studio-freight/lenis";
import React from "react";
import { Link } from "react-router-dom";
import './App.css'

function App() {
  const lenis = new Lenis({
    duration: 3.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return (
    
    <div className="list">
     <Link to='/First' target="_blank"> Diamond</Link>
     <Link to='/Third' target="_blank"> Grass</Link>
     <Link to='/Fourth' target="_blank"> Solar system light</Link>
     <Link to='/Golden' target="_blank"> Golden</Link>
     <Link to='/RubiksCube' target="_blank"> RubiksCube</Link>
     <Link to='/Animate' target="_blank"> Animate</Link>
     <Link to='/Login' target="_blank"> Login</Link>
    </div>
  );
}

export default App;
