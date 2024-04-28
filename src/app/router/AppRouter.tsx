import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import CoursesPage from "../pages/courses/CoursesPage";
import Home from "../pages/home/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap your routes with <Routes> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
        </Route>

        {/* Use the "element" prop instead of "Component" */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
