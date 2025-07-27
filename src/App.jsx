import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import AdminPage from '@/pages/AdminPage';
import LoginPage from '@/pages/LoginPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsPage from '@/pages/TermsPage';
import { Toaster } from '@/components/ui/toaster';
import { DataProvider } from '@/context/DataContext';
import { AuthProvider } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
<<<<<<< HEAD
            <Route
              path="/admin"
=======
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route 
              path="/admin" 
>>>>>>> b52c954ff83e08b3af9dd442c42d0d8051dc548e
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />
            {/* Catch-all route for 404s - redirect to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Router>
        <Toaster />
      </DataProvider>
    </AuthProvider>
  );
}

export default App;