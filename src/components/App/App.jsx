import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import Navigation from "../Navigation/Navigation";
import Error from "../../pages/Error";
import HomePage from "../../pages/HomePage";
import PaymentDetailsPage from "../../pages/PaymentDetailsPage";
import PaymentsPage from "../../pages/PaymentsPage";
import ClientInfo from "../ClientInfo/ClientInfo";
import PaymentReceipt from "../PaymentReceipt/PaymentReceipt.jsx";

function App() {
  return (
    <div className={css.box}>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/payments/:paymentId" element={<PaymentDetailsPage />}>
          <Route path="client" element={<ClientInfo />} />
          <Route path="receipt" element={<PaymentReceipt />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
export default App;
