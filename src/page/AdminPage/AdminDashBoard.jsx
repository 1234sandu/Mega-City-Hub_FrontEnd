import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-icon">Rent</div>
        <div className="logo-text">MegaCity Cab</div>
      </div>
      
      <div className="nav-item active">
        <div className="nav-icon">📊</div>
        <div>Dashboard</div>
      </div>
      
      <div className="nav-item">
        <div className="nav-icon">🚗</div>
        <div>Fleet</div>
      </div>
      
      <div className="nav-item">
        <div className="nav-icon">📅</div>
        <div>Bookings</div>
      </div>
      
      <div className="nav-item">
        <div className="nav-icon">👥</div>
        <div>Customers</div>
      </div>
      
      <div className="nav-item">
        <div className="nav-icon">💰</div>
        <div>Payments</div>
      </div>
      
      <div className="nav-item">
        <div className="nav-icon">📈</div>
        <div>Reports</div>
      </div>
      
      <div className="nav-item">
        <div className="nav-icon">⚙️</div>
        <div>Settings</div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="page-title">Dashboard</div>
      <div className="user-info">
        <div className="notifications">
          🔔
          <div className="notification-count">3</div>
        </div>
        <div className="user-avatar">MC</div>
        <div>Mega City</div>
      </div>
    </div>
  );
};

const StatsGrid = () => {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-icon">🚗</div>
        <div className="stat-value">42</div>
        <div className="stat-label">Available Cars</div>
      </div>
      
      <div className="stat-card">
        <div className="stat-icon">📅</div>
        <div className="stat-value">18</div>
        <div className="stat-label">Today's Bookings</div>
      </div>
      
      <div className="stat-card">
        <div className="stat-icon">📈</div>
        <div className="stat-value">87%</div>
        <div className="stat-label">Fleet Utilization</div>
      </div>
      
      <div className="stat-card">
        <div className="stat-icon">💰</div>
        <div className="stat-value">$4,856</div>
        <div className="stat-label">Today's Revenue</div>
      </div>
    </div>
  );
};

const RecentBookings = () => {
  return (
    <div className="panel">
      <div className="panel-header">
        <div className="panel-title">Recent Bookings</div>
        <button className="panel-action">+ New Booking</button>
      </div>
      
      <table className="booking-table">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Customer</th>
            <th>Car</th>
            <th>Pickup Date</th>
            <th>Return Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#BK1234</td>
            <td>Sarah Johnson</td>
            <td>Toyota Camry</td>
            <td>13 Mar 2025</td>
            <td>15 Mar 2025</td>
            <td><span className="status confirmed">Confirmed</span></td>
          </tr>
          <tr>
            <td>#BK1233</td>
            <td>Michael Brown</td>
            <td>Honda Civic</td>
            <td>13 Mar 2025</td>
            <td>14 Mar 2025</td>
            <td><span className="status confirmed">Confirmed</span></td>
          </tr>
          <tr>
            <td>#BK1232</td>
            <td>Emily Davis</td>
            <td>Ford Escape</td>
            <td>14 Mar 2025</td>
            <td>18 Mar 2025</td>
            <td><span className="status pending">Pending</span></td>
          </tr>
          <tr>
            <td>#BK1231</td>
            <td>James Wilson</td>
            <td>Nissan Altima</td>
            <td>14 Mar 2025</td>
            <td>16 Mar 2025</td>
            <td><span className="status confirmed">Confirmed</span></td>
          </tr>
          <tr>
            <td>#BK1230</td>
            <td>Lisa Martinez</td>
            <td>Hyundai Elantra</td>
            <td>15 Mar 2025</td>
            <td>17 Mar 2025</td>
            <td><span className="status cancelled">Cancelled</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const UpcomingBookings = () => {
  return (
    <div className="panel">
      <div className="panel-header">
        <div className="panel-title">Upcoming Pickups</div>
      </div>
      
      <div className="upcoming-item">
        <div className="car-icon">🚗</div>
        <div className="upcoming-details">
          <h4>Toyota Camry</h4>
          <p>Sarah Johnson</p>
          <p>Today, 2:30 PM</p>
        </div>
      </div>
      
      <div className="upcoming-item">
        <div className="car-icon">🚗</div>
        <div className="upcoming-details">
          <h4>Honda Civic</h4>
          <p>Michael Brown</p>
          <p>Today, 4:15 PM</p>
        </div>
      </div>
      
      <div className="upcoming-item">
        <div className="car-icon">🚗</div>
        <div className="upcoming-details">
          <h4>Nissan Altima</h4>
          <p>James Wilson</p>
          <p>Tomorrow, 9:00 AM</p>
        </div>
      </div>
    </div>
  );
};

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="calendar-header">
        <div className="calendar-month">March 2025</div>
        <div className="calendar-nav">
          <button className="calendar-nav-btn">◀</button>
          <button className="calendar-nav-btn">▶</button>
        </div>
      </div>
      
      <div className="calendar-days">
        <div className="calendar-day-header">Su</div>
        <div className="calendar-day-header">Mo</div>
        <div className="calendar-day-header">Tu</div>
        <div className="calendar-day-header">We</div>
        <div className="calendar-day-header">Th</div>
        <div className="calendar-day-header">Fr</div>
        <div className="calendar-day-header">Sa</div>
        
        <div className="calendar-day other-month">23</div>
        <div className="calendar-day other-month">24</div>
        <div className="calendar-day other-month">25</div>
        <div className="calendar-day other-month">26</div>
        <div className="calendar-day other-month">27</div>
        <div className="calendar-day other-month">28</div>
        <div className="calendar-day">1</div>
        
        <div className="calendar-day">2</div>
        <div className="calendar-day">3</div>
        <div className="calendar-day">4</div>
        <div className="calendar-day">5</div>
        <div className="calendar-day">6</div>
        <div className="calendar-day">7</div>
        <div className="calendar-day">8</div>
        
        <div className="calendar-day">9</div>
        <div className="calendar-day">10</div>
        <div className="calendar-day">11</div>
        <div className="calendar-day">12</div>
        <div className="calendar-day today has-booking">13</div>
        <div className="calendar-day has-booking">14</div>
        <div className="calendar-day has-booking">15</div>
        
        <div className="calendar-day">16</div>
        <div className="calendar-day">17</div>
        <div className="calendar-day">18</div>
        <div className="calendar-day">19</div>
        <div className="calendar-day">20</div>
        <div className="calendar-day">21</div>
        <div className="calendar-day">22</div>
        
        <div className="calendar-day">23</div>
        <div className="calendar-day">24</div>
        <div className="calendar-day">25</div>
        <div className="calendar-day">26</div>
        <div className="calendar-day">27</div>
        <div className="calendar-day">28</div>
        <div className="calendar-day">29</div>
        
        <div className="calendar-day">30</div>
        <div className="calendar-day">31</div>
        <div className="calendar-day other-month">1</div>
        <div className="calendar-day other-month">2</div>
        <div className="calendar-day other-month">3</div>
        <div className="calendar-day other-month">4</div>
        <div className="calendar-day other-month">5</div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <StatsGrid />
        <div className="content-grid">
          <RecentBookings />
          <div>
            <UpcomingBookings />
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;