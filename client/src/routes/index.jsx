import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProfilePage from "../pages/userProfile";
import Premier from "../pages/Payment";
import PaymentSuccess from "../pages/PaymentSuccess";
import PaymentCancel from "../pages/PaymentCancel";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="userProfile" element={<ProfilePage />} />
        <Route path="premier" element={<Premier />} />
        <Route path="payment-success" element={<PaymentSuccess />} />
        <Route path="payment-cancel" element={<PaymentCancel />} />
      </Route>
    </Route>
  )
);

export { router };
