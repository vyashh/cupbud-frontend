import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/login" Component={HomePage} />
    </Routes>
  );
}

export default App;
