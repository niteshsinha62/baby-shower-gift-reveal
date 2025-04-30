import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import StepThree from './pages/StepThree';
import FinalReveal from './pages/FinalReveal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/step1" element={<StepOne />} />
     
        <Route path="/step2" element={<StepThree />} />
        <Route path="/reveal" element={<FinalReveal />} />
      </Routes>
    </Router>
  );
}

export default App;
