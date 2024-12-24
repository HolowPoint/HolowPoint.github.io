import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './router';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', // Ensures footer is at the bottom
        }}
      >
        <Navbar />
        <div style={{ flex: 1 }}>
          <AppRoutes /> {/* Routes are handled here */}
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
