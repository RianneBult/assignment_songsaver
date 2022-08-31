import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import SongOverview from "./components/SongOverview";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <nav>
        <ul className="nav-container">
          <li className="nav-bar">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-bar">
            <Link className="nav-link" to="/About">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<SongOverview />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  )
}

export default App;