import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import CoursesPage from "../pages/Coachs/CoachsPage";
import Home from "../pages/home/Home";
import MembersPage from "../pages/Members/MembersPage";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap your routes with <Routes> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/members" element={<MembersPage />} />
        </Route>

        {/* Use the "element" prop instead of "Component" */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
