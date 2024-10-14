import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login-page';
import InvestorPage from './pages/investor-page';
import ProjectPage from './pages/project-page';
import NotFoundPage from './components/profile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/investor" element={<InvestorPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
