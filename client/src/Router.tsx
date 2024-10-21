import { Routes, Route } from "react-router-dom";
import OrderPage from "./pages/OrderPage";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentSuccessfulPage from "./pages/PaymentSuccessfulPage";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<OrderPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/success" element={<PaymentSuccessfulPage />} />
    </Routes>
  );
};

export default router;
