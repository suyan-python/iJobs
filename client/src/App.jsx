import Companies from "./components/admin/Companies";
import CompanyCreate from "./components/admin/CompanyCreate";
import CompanySetup from "./components/admin/CompanySetup";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import BehindTheBusiness from "./components/behind/BehindTheBusiness";
import Browser from "./components/browser/Browse";
import JobDescription from "./components/JobDescription";
import Jobs from "./components/jobs/Jobs";
import LandingPage from "./components/Landing";
import Profile from "./components/Profile";
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
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/description/:id" element={<JobDescription />} />
          <Route path="/browse" element={<Browser />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/behind" element={<BehindTheBusiness />} />

          {/* route for admin  */}
          <Route path="/admin/companies" element={<Companies />} />
          <Route path="/admin/companies/create" element={<CompanyCreate />} />
          <Route path="/admin/companies/:id" element={<CompanySetup />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
