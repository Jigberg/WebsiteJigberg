import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ViewModel from "./pages/ViewModel";
import Rat from "./pages/Rat";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/ViewModel" element={<ViewModel />} />
          <Route path="/Rat" element={<Rat />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
