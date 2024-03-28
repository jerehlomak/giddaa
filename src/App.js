import { Home, DashboardPage, GetSummary, Login } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Summary,ExpectedTransactions, SuccessfulTransactions,Defaults } from "./components/Dashboard/transactions";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { ProtectedRoute } from "./components";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="account/login"  element={<Login />} />
          <Route path="developer/transaction" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>}>
            <Route path="get-summary" element={<Summary />} />
            <Route path="get-missed-payments" element={<Defaults />} />
            <Route path="get-expected-payments" element={<ExpectedTransactions />} />
            <Route path="get-succesful-payments" element={<SuccessfulTransactions />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer /> 
    </>
  );
}

export default App;
