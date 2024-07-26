import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page2 from './Page2.jsx'
import App from './App.jsx'; // Import the main App component
import Page1 from './Page1.jsx'; // Import the Page1 component
import Page3 from './Page3.jsx'
import './index.css';

// Render the application using ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Render App component for the root route */}
        <Route path="/page1" element={<Page1 />} /> {/* Render Page1 component for the /page1 route */}
        {/* <Route path='/page2' element={>} */}
        <Route path='/page2' element={<Page2 />} /> {/* Render Page2 component for the /page2 route */}
        <Route path='/page3' element={<Page3 />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
