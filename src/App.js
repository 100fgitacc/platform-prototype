import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login-page';
import InvestorPage from './pages/investor-page';
import InvestorPageProject from './pages/investor-page-project';
import ProjectPage from './pages/project-page';
import CoursePage from './pages/course-page';
import NotFoundPage from './components/profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './privateRoute';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route element={<PrivateRoute />}>
            <Route path="/investor/:name" element={<InvestorPageProject />} />
            <Route path="/investor" element={<InvestorPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/course" element={<CoursePage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
