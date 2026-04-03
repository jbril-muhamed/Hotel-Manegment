

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './component/common/Navbar';
import FooterComponent from './component/common/Footer';
import LoginPage from './component/auth/LoginPage';
import RegisterPage from './component/auth/RegisterPage';
import HomePage from './component/home/HomePage';
import AllRoomsPage from './component/booking_rooms/AllRoomsPage';
import RoomDetailsBookingPage from './component/booking_rooms/RoomDetailsPage';
import FindBookingPage from './component/booking_rooms/FindBookingPage';

// Admin Components
import AdminLayout from './component/admin/layout/AdminLayout';
import AdminDashboard from './component/admin/dashboard/AdminDashboard';
import ManageRoomPage from './component/admin/ManageRoomPage';
import EditRoomPage from './component/admin/EditRoomPage';
import AddRoomPage from './component/admin/AddRoomPage';
import ManageBookingsPage from './component/admin/ManageBookingsPage';
import EditBookingPage from './component/admin/EditBookingPage';
import ProfilePage from './component/profile/ProfilePage';
import EditProfilePage from './component/profile/EditProfilePage';
import { ProtectedRoute, AdminRoute } from './service/guard';

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="App">
      {!isAdminRoute && <Navbar />}
      <div className={isAdminRoute ? "" : "content"}>
        <Routes>
          {/* Public Routes */}
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/rooms" element={<AllRoomsPage />} />
          <Route path="/find-booking" element={<FindBookingPage />} />

          {/* Protected Routes */}
          <Route path="/room-details-book/:roomId"
            element={<ProtectedRoute element={<RoomDetailsBookingPage />} />}
          />
          <Route path="/profile"
            element={<ProtectedRoute element={<ProfilePage />} />}
          />
          <Route path="/edit-profile"
            element={<ProtectedRoute element={<EditProfilePage />} />}
          />

          {/* Admin Routes */}
          <Route path="/admin"
            element={<AdminRoute element={<AdminLayout><AdminDashboard /></AdminLayout>} />}
          />
          <Route path="/admin/manage-rooms"
            element={<AdminRoute element={<AdminLayout><ManageRoomPage /></AdminLayout>} />}
          />
          <Route path="/admin/edit-room/:roomId"
            element={<AdminRoute element={<AdminLayout><EditRoomPage /></AdminLayout>} />}
          />
          <Route path="/admin/add-room"
            element={<AdminRoute element={<AdminLayout><AddRoomPage /></AdminLayout>} />}
          />
          <Route path="/admin/manage-bookings"
            element={<AdminRoute element={<AdminLayout><ManageBookingsPage /></AdminLayout>} />}
          />
          <Route path="/admin/edit-booking/:bookingCode"
            element={<AdminRoute element={<AdminLayout><EditBookingPage /></AdminLayout>} />}
          />

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
      {!isAdminRoute && <FooterComponent />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
