import { useState, useEffect } from "react";
import {
  StarIcon,
  MapPinIcon,
  ClockIcon,
  DollarSignIcon,
  CheckCircleIcon,
  PhoneIcon,
  MailIcon,
  CarIcon,
  CheckIcon,
} from "lucide-react";
import axios from "axios";
import { useAuth } from "../../utils/AuthContext";

const DriverProfile = () => {
  const { user } = useAuth();
  const [isOnline, setIsOnline] = useState(true);
  const [activeTab, setActiveTab] = useState("current");
  const [driver, setDriver] = useState(null);
  const [currentBookings, setCurrentBookings] = useState([]);
  const [pastBookings, setPastBookings] = useState([]);
  const [newRideRequest, setNewRideRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDriverData = async () => {
      try {
        if (!user || !user.userId) {
          setError("Please log in to view your profile");
          setLoading(false);
          return;
        }

        setLoading(true);

        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        };

        const driverId = user.userId;

        // Fetch driver data
        const driverResponse = await axios.get(
          `http://localhost:8080/auth/driver/getdriver/${driverId}`,
          config
        );
        setDriver(driverResponse.data);

        // Fetch bookings
        const bookingsResponse = await axios.get(
          `http://localhost:8080/auth/driver/${driverId}/bookings`,
          config
        );
        const bookings = bookingsResponse.data;
        console.log("Fetched bookings:", bookings); // Debug booking statuses

        // Separate current and past bookings based on completed flag
        const current = bookings.filter((booking) => !booking.completed);
        const past = bookings.filter((booking) => booking.completed);
        setCurrentBookings(current);
        setPastBookings(past);
      } catch (error) {
        console.error("Error fetching driver data:", error);
        setError("Failed to load driver data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    const fetchNewRideRequest = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        };
        const response = await axios.get(
          "http://localhost:8080/auth/bookings/available",
          config
        );
        if (response.data.length > 0) {
          setNewRideRequest(response.data[0]);
        } else {
          setNewRideRequest(null);
        }
      } catch (error) {
        console.error("Error fetching new ride request:", error);
      }
    };

    fetchDriverData();
    fetchNewRideRequest();
    const interval = setInterval(fetchNewRideRequest, 30000);
    return () => clearInterval(interval);
  }, [user]);

  const handleToggleOnline = async () => {
    try {
      if (!user || !user.userId) return;

      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      };

      const driverId = user.userId;
      const response = await axios.put(
        `http://localhost:8080/auth/driver/${driverId}/availability`,
        { availability: !isOnline },
        config
      );
      setIsOnline(!isOnline);
      setDriver(response.data);
    } catch (error) {
      console.error("Error updating availability:", error);
      setError("Failed to update availability. Please try again.");
    }
  };

  const handleAcceptBooking = async (bookingId) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      };

      await axios.put(
        `http://localhost:8080/auth/bookings/${bookingId}/confirm`,
        {},
        config
      );
      setCurrentBookings(
        currentBookings.map((booking) =>
          booking.bookingId === bookingId ? { ...booking, status: "CONFIRMED" } : booking
        )
      );
      setNewRideRequest(null); // Clear new ride request after accepting
    } catch (error) {
      console.error("Error accepting booking:", error);
      setError("Failed to accept booking. Please try again.");
    }
  };

  const handleDeclineBooking = async (bookingId) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      };

      await axios.post(
        `http://localhost:8080/auth/bookings/${bookingId}/cancel`,
        { reason: "Declined by driver" },
        config
      );
      setNewRideRequest(null); // Clear new ride request after declining
    } catch (error) {
      console.error("Error declining booking:", error);
      setError("Failed to decline booking. Please try again.");
    }
  };

  const handleAcceptNewRide = async () => {
    if (!newRideRequest) return;
    await handleAcceptBooking(newRideRequest.bookingId);
  };

  const handleDeclineNewRide = async () => {
    if (!newRideRequest) return;
    await handleDeclineBooking(newRideRequest.bookingId);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "COMPLETED":
        return "bg-green-700 text-white";
      case "CONFIRMED":
        return "bg-green-800 text-white";
      case "PENDING":
        return "bg-yellow-400 text-green-900";
      case "IN_PROGRESS":
        return "bg-yellow-500 text-green-900";
      case "CANCELLED":
        return "bg-red-600 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  const ConfirmButton = ({ text = "Accept", onClick }) => (
    <button
      onClick={onClick}
      className="flex items-center justify-center px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-green-900 font-medium rounded-md transition-colors shadow-sm"
    >
      <CheckIcon className="w-5 h-5 mr-1" />
      {text}
    </button>
  );

  const DeclineButton = ({ onClick }) => (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-gray-200 text-green-900 rounded-md font-medium text-sm hover:bg-gray-300 transition-colors"
    >
      Decline
    </button>
  );

  const BookingCard = ({ booking, isPast = false, showConfirmButton = false }) => (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-green-50">
      <div className="p-3">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
              <img
                src={booking.passengerImage || "https://randomuser.me/api/portraits/lego/1.jpg"}
                alt={booking.passengerName}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium text-green-900">{booking.passengerName}</h4>
              <div className="flex items-center text-sm text-green-800">
                <StarIcon className="w-4 h-4 text-yellow-500 mr-1" />
                <span>{booking.passengerRating !== null ? booking.passengerRating : "N/A"}</span>
              </div>
            </div>
          </div>
          <div>
            <span
              className={`text-xs px-2 py-1 rounded-full ${getStatusColor(booking.status)}`}
            >
              {booking.status}
            </span>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <div className="flex items-start">
              <MapPinIcon className="w-4 h-4 text-green-700 mr-1 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-green-700">Pickup</p>
                <p className="text-xs text-green-900">{booking.pickupLocation}</p>
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-start">
              <MapPinIcon className="w-4 h-4 text-green-900 mr-1 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-green-700">Dropoff</p>
                <p className="text-xs text-green-900">{booking.destination}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 flex justify-between items-center">
          <div className="flex gap-3 text-xs">
            <div className="flex items-center">
              <ClockIcon className="w-4 h-4 text-green-700 mr-1" />
              <span className="text-green-900">{booking.pickupTime}</span>
            </div>
            <div className="flex items-center">
              <DollarSignIcon className="w-4 h-4 text-green-700 mr-1" />
              <span className="text-green-900">${booking.totalAmount}</span>
            </div>
          </div>
          {showConfirmButton && (
            <ConfirmButton
              text="Accept"
              onClick={() => handleAcceptBooking(booking.bookingId)}
            />
          )}
          {isPast && booking.completed && (
            <div className="flex items-center text-green-700">
              <CheckCircleIcon className="w-4 h-4 mr-1" />
              <span className="text-xs font-medium">Completed</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (!user) {
    return <div className="text-center p-8 text-red-600">Please log in to view your profile</div>;
  }

  if (loading) {
    return <div className="text-center p-8 text-white bg-green-900 min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-yellow-400 bg-green-900 min-h-screen">{error}</div>;
  }

  if (!driver) {
    return <div className="text-center p-8 text-yellow-400 bg-green-900 min-h-screen">Driver not found</div>;
  }

  return (
    <div className="bg-green-900 min-h-screen w-full py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-1">
            <div className="bg-green-800 rounded-lg shadow-lg overflow-hidden">
              <header className="bg-yellow-400 p-3">
                <h1 className="text-xl font-bold text-green-900 text-center">Driver Dashboard</h1>
              </header>
              <div className="p-4">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-400 mb-3">
                    <img
                      src={driver.profileImage || "https://randomuser.me/api/portraits/men/75.jpg"}
                      alt="Driver profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-1">{driver.driverName}</h2>
                  <div className="flex items-center mb-3">
                    <StarIcon className="w-4 h-4 text-yellow-400" />
                    <span className="ml-1 text-white font-medium">4.9</span>
                    <span className="text-green-300 ml-1">(1,248 rides)</span>
                  </div>
                  <button
                    onClick={handleToggleOnline}
                    className={`w-full px-4 py-2 rounded-full font-medium mb-4 ${
                      isOnline
                        ? "bg-yellow-400 text-green-900 border border-yellow-500"
                        : "bg-green-700 text-white border border-green-600"
                    }`}
                    aria-label={isOnline ? "Go offline" : "Go online"}
                  >
                    {isOnline ? "Online" : "Offline"}
                  </button>
                  <div className="w-full space-y-2 text-sm">
                    <div className="flex items-center">
                      <CarIcon className="w-4 h-4 text-green-300 mr-2" />
                      <span className="text-white">
                        {driver.car?.model || "N/A"} • {driver.car?.licensePlate || "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <PhoneIcon className="w-4 h-4 text-green-300 mr-2" />
                      <span className="text-white">{driver.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <MailIcon className="w-4 h-4 text-green-300 mr-2" />
                      <span className="text-white">{driver.email}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-green-700 p-3 border-t border-green-600">
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center">
                    <div className="text-green-200">Earnings</div>
                    <div className="font-bold text-yellow-400">$142.50</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-200">Rides</div>
                    <div className="font-bold text-yellow-400">7</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-200">Hours</div>
                    <div className="font-bold text-yellow-400">5.5</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-800 rounded-lg shadow-lg mt-4 p-4">
              <h3 className="font-bold text-lg mb-3 text-white">New Ride Request</h3>
              {newRideRequest ? (
                <>
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                      <img
                        src={newRideRequest.passengerImage || "https://randomuser.me/api/portraits/lego/1.jpg"}
                        alt={newRideRequest.passengerName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-white">{newRideRequest.passengerName}</p>
                      <p className="text-sm text-green-300">1.2 miles away</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <DeclineButton onClick={handleDeclineNewRide} />
                    <ConfirmButton text="Accept" onClick={handleAcceptNewRide} />
                  </div>
                </>
              ) : (
                <p className="text-green-300">No new ride requests</p>
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-green-800 rounded-lg shadow-lg overflow-hidden">
              <div className="bg-green-900 text-yellow-400 px-4 py-3 flex justify-between items-center">
                <h3 className="text-lg font-bold">Bookings</h3>
                <div className="flex space-x-1">
                  <button
                    className={`px-3 py-1 rounded-md text-sm ${
                      activeTab === "current"
                        ? "bg-yellow-400 text-green-900 font-medium"
                        : "text-yellow-400"
                    }`}
                    onClick={() => setActiveTab("current")}
                  >
                    Current
                  </button>
                  <button
                    className={`px-3 py-1 rounded-md text-sm ${
                      activeTab === "past"
                        ? "bg-yellow-400 text-green-900 font-medium"
                        : "text-yellow-400"
                    }`}
                    onClick={() => setActiveTab("past")}
                  >
                    Past
                  </button>
                </div>
              </div>
              <div className="p-4 max-h-[calc(100vh-240px)] overflow-y-auto bg-green-700">
                <div className="grid gap-4">
                  {activeTab === "current" ? (
                    currentBookings.length > 0 ? (
                      currentBookings.map((booking) => (
                        <BookingCard
                          key={booking.bookingId}
                          booking={booking}
                          showConfirmButton={booking.status?.toUpperCase() === "PENDING"}
                        />
                      ))
                    ) : (
                      <p className="text-white">No current bookings</p>
                    )
                  ) : pastBookings.length > 0 ? (
                    pastBookings.map((booking) => (
                      <BookingCard
                        key={booking.bookingId}
                        booking={booking}
                        isPast={true}
                      />
                    ))
                  ) : (
                    <p className="text-white">No past bookings</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverProfile;