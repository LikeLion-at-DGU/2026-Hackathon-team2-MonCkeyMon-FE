import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ServicePage from "../pages/ServicePage";
import NotFoundPage from "../pages/NotFoundPage";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default Router;