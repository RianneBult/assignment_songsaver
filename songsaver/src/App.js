import React from "react";

import { Link, Route, Routes } from "react-router-dom";

import SongOverview from "./components/SongOverview";
import About from "./pages/About"

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/About">About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<SongOverview />} />
        <Route path="/About" element={<About />} />
      </Routes>
      {/* <SongOverview /> */}
    </div>
  )
}

export default App;
