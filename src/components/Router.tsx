import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../hoc/ProtectedRoute';
import { WelcomePage, SignInPage, SignUpPage, MainPage, NotFoundPage } from '../pages';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<SignInPage />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route
        path="/main"
        element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        }
      />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};
