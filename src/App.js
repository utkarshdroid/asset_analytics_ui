import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import InvestorsTable from './components/InvestorsTable';
import InvestorDetails from './components/InvestorDetails';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/investors" element={<InvestorsTable />} />
      <Route path="/investors/:investorId" element={<InvestorDetails />} />
      {/* Include other routes if needed */}
    </Routes>
  );
}

export default App;
