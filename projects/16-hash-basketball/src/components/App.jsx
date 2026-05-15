import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./NavBar";

import Home from "../pages/Home";
import Team from "../pages/Team";
import Teams from "../pages/Teams";
import Player from "../pages/Player";
import Players from "../pages/Players";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />}>
            <Route path=":playerId" element={<Player />} />
          </Route>
          <Route path="/teams" element={<Teams />} />
          <Route path="/:teamId" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}
