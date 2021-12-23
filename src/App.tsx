import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./pages/MainPage";

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <div className="container">
        <MainPage />
      </div>
    </Router>
  );
};

export default App;
