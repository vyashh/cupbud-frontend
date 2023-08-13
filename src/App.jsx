import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/authenticate" Component={LoginPage} />
      <Route path="/" Component={HomePage} />
    </Routes>
  );
}

export default App;
