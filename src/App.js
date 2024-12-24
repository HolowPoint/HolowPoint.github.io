// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './router'; // Notice the import from router.js
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* All the routes are handled in router.js now */}
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
