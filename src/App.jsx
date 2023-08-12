import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/AuthPage";

function App() {
  return (
    <Routes>
      <Route path="/authenticate" Component={LoginPage} />
    </Routes>
  );
}

export default App;
