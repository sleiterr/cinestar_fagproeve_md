import "./App.css";
import {
  Navigate,
  useLocation,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import ContactConfirmation from "./components/ContactIntro/ContactConfirmation ";
import Home from "./pages/Home/Home";
import PageLogin from "./pages/Login/PageLogin";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Backoffice from "./pages/Backoffice/Backoffice";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  // useLocalStorage is a custom hook that allows us to store the token in local storage and keep it in sync with the state
  const [token, setToken] = useLocalStorage("token", null);
  const location = useLocation();
  const navigate = useNavigate();

  // Define routes where the header should be hidden
  const hideHeaderRoutes = ["/contact-confirmation", "/login", "/backoffice"];
  // Determine if the header should be shown based on the current location
  const showHeader = !hideHeaderRoutes.includes(location.pathname);

  // Handle login by setting the token and navigating to the backoffice
  const handleLogin = (newToken) => {
    setToken(newToken);
    navigate("/backoffice");
  };

  // Handle logout by clearing the token and navigating to the login page
  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    // localStorage.removeItem("favorites");
    navigate("/login");
  };

  return (
    <>
      {showHeader && <Header token={token} onLogout={handleLogout} />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/contact-confirmation"
            element={<ContactConfirmation />}
          />
          <Route path="/login" element={<PageLogin onLogin={handleLogin} />} />
          <Route
            path="/backoffice"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Backoffice token={token} onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      {showHeader && <Footer />}
      <ToastContainer position="top-center" autoClose={2500} />
    </>
  );
}

export default App;
