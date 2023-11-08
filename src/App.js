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
     <Link to='/First'> First</Link>
     <Link to='/Third'> Third</Link>
     <Link to='/Fourth'> Fourth</Link>
     <Link to='/Fifth'> Fifth</Link>
     <Link to='/Golden'> Golden</Link>
     <Link to='/Rounded'> Rounded</Link>
     <Link to='/RubiksCube'> RubiksCube</Link>
     <Link to='/Cube'> Cube</Link>
     <Link to='/Curvecube'> Curvecube</Link>
     <Link to='/Animate'> Animate</Link>
     <Link to='/ParticleScene'> ParticleScene</Link>
     <Link to='/Login'> Login</Link>
    </div>
  );
}

export default App;
