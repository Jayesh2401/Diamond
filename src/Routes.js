import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { ParticleScene } from "./ParticleScene";
import Animate from "./Animate";
import Rounded from "./Rounded";
import Golden from "./Golden";
import Fifth from "./Fifth";
import Fourth from "./Fourth";
import First from "./First";
import Third from "./Third";
import RubiksCube from "./RubiksCube";
import Cube from "./Test";
import Curvecube from "./Curvecube";
import Login from "./Login";
import App from './App';

const CustomRoutes = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' Component={App}/>
            <Route path='/First' Component={First}/>
            <Route path='/Third' Component={Third}/>
            <Route path='/Fourth' Component={Fourth}/>
            <Route path='/Fifth' Component={Fifth}/>
            <Route path='/Golden' Component={Golden}/>
            <Route path='/Rounded' Component={Rounded}/>
            <Route path='/RubiksCube' Component={RubiksCube}/>
            <Route path='/Cube' Component={Cube}/>
            <Route path='/Curvecube' Component={Curvecube}/>
            <Route path='/Animate' Component={Animate}/>
            <Route path='/ParticleScene' Component={ParticleScene}/>
            <Route path='/Login' Component={Login}/>
           
        </Routes>
    </HashRouter>
  )
}

export default CustomRoutes