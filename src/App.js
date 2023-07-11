import { Route, Routes } from "react-router-dom";
// import Pages
import Login from './pages/Login/Login';
import MainPage from "./pages/main/MainPage";
import Pro from "./pages/Pro/Pro";
import Layout from './layout';
import Profile from './pages/Profile/Profile'


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/pro" element={<Pro />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Layout>

  );
};

export default App;
