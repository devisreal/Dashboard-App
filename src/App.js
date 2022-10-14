import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import {
  Login,
  Register,
  PageLayout,
  DashboardApp,
  DashboardAuthor,
} from "./routes";

function App() {
  return (
    <div className="App">
      <Routes forceRefresh>
        <Route index path="/" element={<Login />} />
        <Route path="/login" element={<Navigate to="/" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PageLayout />}>
          <Route index element={<Navigate replace to="app" />} />
          <Route path="app" element={<DashboardApp />} />
          <Route path="author" element={<DashboardAuthor />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
