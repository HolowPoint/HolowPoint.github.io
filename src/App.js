import React from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './router'; // Routes file for your app's pages
import Footer from './components/Footer';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Full viewport height
      }}
    >
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content */}
      <div style={{ flex: 1 }}>
        <AppRoutes />
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
