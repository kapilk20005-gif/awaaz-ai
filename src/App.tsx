import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Documents from "./pages/Documents";
import Jobs from "./pages/Jobs";
import AIChat from "./pages/AIChat";
import Schemes from "./pages/Schemes";
import Verification from "./pages/Verification";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";

import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/" element={<Landing />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        {/* Documents */}
        <Route
          path="/documents"
          element={
            <MainLayout>
              <Documents />
            </MainLayout>
          }
        />

        {/* Jobs */}
        <Route
          path="/jobs"
          element={
            <MainLayout>
              <Jobs />
            </MainLayout>
          }
        />

        {/* AI */}
        <Route
          path="/ai"
          element={
            <MainLayout>
              <AIChat />
            </MainLayout>
          }
        />

        {/* Schemes */}
        <Route
          path="/schemes"
          element={
            <MainLayout>
              <Schemes />
            </MainLayout>
          }
        />

        {/* Verification */}
        <Route
          path="/verification"
          element={
            <MainLayout>
              <Verification />
            </MainLayout>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <MainLayout>
              <Profile />
            </MainLayout>
          }
        />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <MainLayout>
              <Admin />
            </MainLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}