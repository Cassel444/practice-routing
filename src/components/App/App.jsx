import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import Navigation from "../Navigation/Navigation";
import Error from "../../pages/Error";
import HomePage from "../../pages/HomePage";
import PaymentDetailsPage from "../../pages/PaymentDetailsPage";
import PaymentsPage from "../../pages/PaymentsPage";

function App() {
  return (
    <div className={css.box}>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/payments/:paymentsId" element={<PaymentDetailsPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
export default App;
