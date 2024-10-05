import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import LandingPage from "./components/Landing";
import Footer from "./components/shared/Footer";
import NavBar from "./components/shared/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
