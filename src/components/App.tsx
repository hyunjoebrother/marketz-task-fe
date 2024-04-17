import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main/Main";
import Info from "../pages/Info/Info";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info/:id" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
