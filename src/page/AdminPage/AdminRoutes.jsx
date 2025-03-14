import { Routes, Route } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import AdminDashboard from './AdminDashBoard';
import ShowBooking from '../BookingPage/ShowBooking';
import ShowDrivers from '../DriverPage/ShowDrivers'
import ShowCustomers from '../CustomerPage/ShowCustomer';
import ShowVehicle from '../ShowVehical/ShowVehicals';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="bookings" element={<ShowBooking />} />
        <Route path="drivers" element={<ShowDrivers />} />
        <Route path="customers" element={<ShowCustomers />} />
        <Route path="cars" element={<ShowVehicle />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;