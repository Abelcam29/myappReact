import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PrivateRoute from './routes/PrivateRoute';

import Login from './views/Login';
import Home from './views/Home';
import Dashboard from './views/Dashboard';

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => setUser(user);
  const handleLogout = () => setUser(null);

  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <NavBar user={user} onLogout={handleLogout} />
        <main style={{ flex: 1 }}>
          <Routes>
            {/* Pasa user a Login para que pueda redirigir si ya está logueado */}
            <Route path="/login" element={<Login user={user} onLogin={handleLogin} />} />
            <Route
              path="/"
              element={
                <PrivateRoute user={user}>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute user={user}>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
