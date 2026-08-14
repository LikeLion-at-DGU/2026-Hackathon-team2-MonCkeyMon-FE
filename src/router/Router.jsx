import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ServicePage from "../pages/ServicePage";
import CameraPage from "../pages/CameraPage";
import PhotoPage from "../pages/PhotoPage";
import NotFoundPage from "../pages/NotFoundPage";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/camera" element={<CameraPage />} />
            <Route path="/photo" element={<PhotoPage />} />
            <Route path="/theme" element={<div>배경 테마 선정</div>} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default Router;