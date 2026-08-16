import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ServicePage from "../pages/ServicePage";
import CameraPage from "../pages/CameraPage";
import PhotoPage from "../pages/PhotoPage";
import ThemePage from "../pages/ThemePage";
import NotFoundPage from "../pages/NotFoundPage";
import IntroPage from "../pages/IntroPage";

// 여기부터 관리자용
import CoverPage from "../pages/admin/CoverPage";
import DailyPage from "../pages/admin/DailyPage";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/camera" element={<CameraPage />} />
            <Route path="/photo" element={<PhotoPage />} />
            <Route path="/theme" element={<ThemePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/intro" element={<IntroPage />} />

// 여기부터 관리자용
            <Route path="/admin" element={<CoverPage />} />
            <Route path="/admin/daily" element={<DailyPage />} />
        </Routes>
    );
}

export default Router;