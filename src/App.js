'use strict'

import { Route, Routes } from "react-router-dom";
// import Pages
import Login from './pages/Login/Login';
import MainPage from "./pages/main/MainPage";
import Pro from "./pages/Pro/Pro";
import Layout from './layout';



function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Pro />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Layout>

  );
};

export default App;
