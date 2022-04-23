import Profile from "./pages/Profile";
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="stats-view">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Profile />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
