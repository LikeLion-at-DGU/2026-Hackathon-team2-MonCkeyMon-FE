import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ServicePage from "../pages/ServicePage";
import CameraPage from "../pages/CameraPage";
import PhotoPage from "../pages/PhotoPage";
import ThemePage from "../pages/ThemePage";
import NotFoundPage from "../pages/NotFoundPage";
import IntroPage from "../pages/IntroPage";
import ProductPage from "../pages/ProductPage";

// 여기부터 관리자용
import CoverPage from "../pages/admin/CoverPage";
import DailyPage from "../pages/admin/DailyPage";
import TotalPage from "../pages/admin/TotalPage";
import InfoPage from "../pages/admin/InfoPage";

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
            <Route path="/product" element={<ProductPage />} />


            <Route path="/admin" element={<CoverPage />} />
            <Route path="/admin/daily" element={<DailyPage />} />
            <Route path="/admin/total" element={<TotalPage />} />
            <Route path="/admin/info" element={<InfoPage />} />
        </Routes>
    );
}

export default Router;