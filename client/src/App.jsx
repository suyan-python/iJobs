import Companies from "./components/admin/Companies";
import CompanyCreate from "./components/admin/CompanyCreate";
import CompanySetup from "./components/admin/CompanySetup";
import AdminJobs from "./components/admin/AdminJobs";
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
import AdminPostJobs from "./components/admin/AdminPostJobs";
import Applicants from "./components/admin/Applicants";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import AboutUs from "./components/aboutus/AboutUs";
import Contact from "./components/contact/Contact";
import ScrollToTop from "./components/ScrollToTop";
import TermsAndServices from "./components/terms/Terms";
import PrivacyPolicy from "./components/policy/Policy";
import SupportSection from "./components/support/Support";
import FAQ from "./components/faq/FAQ";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/description/:id" element={<JobDescription />} />
          <Route path="/browse" element={<Browser />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/behind" element={<BehindTheBusiness />} />
          <Route path="/terms" element={<TermsAndServices />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/support" element={<SupportSection />} />
          <Route path="/faq" element={<FAQ />} />

          {/* route for admin  */}
          <Route
            path="/admin/companies"
            element={
              <ProtectedRoute>
                <Companies />
              </ProtectedRoute>
            }
          />
          <Route path="/admin/companies/create" element={<CompanyCreate />} />
          <Route path="/admin/companies/:id" element={<CompanySetup />} />
          <Route path="/admin/jobs" element={<AdminJobs />} />
          <Route path="/admin/jobs/create" element={<AdminPostJobs />} />
          <Route path="/admin/jobs/:id/applicants" element={<Applicants />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
