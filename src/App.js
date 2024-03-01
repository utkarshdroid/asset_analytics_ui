import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import HomePage from './pages/Homepage';
import InvestorsTable from './components/InvestorsTable';
import InvestorDetails from './components/InvestorDetails';
import { isTokenValid } from '../src/services/authService'; // Assuming this checks the token validity
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../src/index.css'

function App() {
  // Helper component for protected routes
  const RequireAuth = ({ children }) => {
    const location = useLocation();
    
    if (!isTokenValid()) {
      // Redirect them to the / page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send
      // them along to that page after logging in, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/investors" element={<RequireAuth><InvestorsTable /></RequireAuth>} />
      <Route path="/investors/:investorId" element={<RequireAuth><InvestorDetails /></RequireAuth>} />
      {/* Include other routes if needed */}
    </Routes>
  );
}

export default App;
