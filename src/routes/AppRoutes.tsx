import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Documents from '../pages/Documents';
import MissingDocs from '../pages/MissingDocs';
import Schemes from '../pages/Schemes';
import AIAssistant from '../pages/AIAssistant';
import Profile from '../pages/Profile';
import Admin from '../pages/Admin';

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/documents/missing" element={<MissingDocs />} />
      <Route path="/schemes" element={<Schemes />} />
      <Route path="/ai" element={<AIAssistant />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </Router>
);

export default AppRoutes;
