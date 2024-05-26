import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import CoursesPage from "../pages/Coachs/CoachsPage";
import Home from "../pages/home/Home";
import MembersPage from "../pages/Members/MembersPage";
import AddMembersPage from "../pages/Members/AddMembersPage";
import MemberDetailsPage from "../pages/Members/MemberDetailsPage";
import OffersPage from "../pages/offers/OffersPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap your routes with <Routes> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="coachs" element={<CoursesPage />} />
          <Route path="members" element={<MembersPage />} />
          <Route path="offers" element={<OffersPage />} />

          <Route path="members/addmember" element={<AddMembersPage />} />
          <Route
            path="members/details/:memberId"
            element={<MemberDetailsPage />}
          />
        </Route>

        {/* Use the "element" prop instead of "Component" */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
