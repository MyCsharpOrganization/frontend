import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/BookingEvent.css";

const BookingEvent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [event, setEvent] = useState({});

  const [formData, setFormData] = useState({
    eventId: id,
    firstName: "",
    lastName: "",
    email: "",
    streetName: "",
    postalCode: "",
    city: "",
    ticketCountity: 1,
  });

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    try {
      const res = await fetch(
        `https://eventapiservice-hbb5bpc8a4h0hec5.swedencentral-01.azurewebsites.net/api/Events/${id}`
      );
      if (!res.ok) throw new Error("Failed to fetch event details");
      const data = await res.json();
      setEvent(data.result);
    } catch (error) {
      console.error("Error fetching event details:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://bookingserviceapi-bxbkcedse4efafev.swedencentral-01.azurewebsites.net/api/Bookings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!res.ok) {
        console.error("Failed to post booking:");
      } else {
        console.log("Booking posted successfully");
        navigate(`/`);
      }
    } catch (error) {
      console.error("Error posting booking:", error);
    }
  };

  return (
    <div className="booking-container">
      <h2 className="booking-title">Book Tickets for</h2>
      <h3 className="booking-event-name">{event.title}</h3>

      <div className="booking-form-wrapper">
        <form onSubmit={handleSubmit} noValidate className="booking-form">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Street Name</label>
            <input
              type="text"
              name="streetName"
              value={formData.streetName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Ticket Quantity</label>
            <input
              type="number"
              name="ticketCountity"
              min="1"
              value={formData.ticketCountity}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="book-btn">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default BookingEvent;
