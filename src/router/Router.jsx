import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ServicePage from "../pages/ServicePage";
import CameraPage from "../pages/CameraPage";
import PhotoPage from "../pages/PhotoPage";
import ThemePage from "../pages/ThemePage";
import NotFoundPage from "../pages/NotFoundPage";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/camera" element={<CameraPage />} />
            <Route path="/photo" element={<PhotoPage />} />
            <Route path="/theme" element={<ThemePage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default Router;