import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/signin" />;
};

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="/create-employee" element={
            <PrivateRoute>
              <CreateEmployee />
            </PrivateRoute>
          } />
          <Route path="/edit-employee/:id" element={
            <PrivateRoute>
              <EditEmployee />
            </PrivateRoute>
          } />
          <Route path="/" element={<Navigate to="/signin" />} />
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;