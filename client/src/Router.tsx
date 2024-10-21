import { Routes, Route } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentPage from "./pages/PaymentPage";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<CheckoutPage />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
};

export default router;
