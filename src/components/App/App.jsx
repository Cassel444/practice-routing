import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import css from "./App.module.css";
import Navigation from "../Navigation/Navigation";

const HomePage = lazy(() => import("../../pages/HomePage"));
const PaymentsPage = lazy(() => import("../../pages/PaymentsPage"));
const PaymentDetailsPage = lazy(() => import("../../pages/PaymentDetailsPage"));
const NotFound = lazy(() => import("../../pages/NotFound"));
const ClientInfo = lazy(() => import("../ClientInfo/ClientInfo"));
const PaymentReceipt = lazy(() =>
  import("../PaymentReceipt/PaymentReceipt.jsx")
);

function App() {
  return (
    <div className={css.box}>
      <Navigation />

      <Suspense fallback={<div>LOADING PAGE...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/payments/:paymentId" element={<PaymentDetailsPage />}>
            <Route path="client" element={<ClientInfo />} />
            <Route path="receipt" element={<PaymentReceipt />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
