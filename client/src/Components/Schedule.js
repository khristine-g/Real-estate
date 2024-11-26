import React, { useState } from 'react';
import '../Schedule.css';
import { Modal, Button } from 'react-bootstrap'; // For the Bootstrap modal

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const availableTimes = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); // Show modal after booking
  };

  return (
    <div className="animate-on-scroll">
    <div className="schedule-container">
      <div className="schedule-row">
        <div className="schedule-image">
          <img
            src="https://i.pinimg.com/736x/32/cd/51/32cd51852b0c01cf160d129733942d55.jpg"
            alt="Property"
            className="property-img"
          />
        </div>

        <div className="schedule-form">
          <h2>Book Your Appointment</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="date">Select a Date</label>
              <input
                type="date"
                id="date"
                value={selectedDate || ''}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="date-picker"
                required
              />
            </div>

            {selectedDate && (
              <div className="form-group">
                <label>Select a Time Slot</label>
                <div className="slots-container">
                  {availableTimes.map((time, index) => (
                    <button
                      key={index}
                      className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedTime(time);
                      }}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Book Appointment
            </button>
          </form>
        </div>
      </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body>
          <div className="modal-content">
            <div className="success-icon">
              <i className="check-icon">&#10004;</i>
            </div>
            <h3>Appointment Successfully Booked!</h3>
            <p>
              Your appointment is scheduled on <strong>{selectedDate}</strong> at{' '}
              <strong>{selectedTime}</strong>.
            </p>
            <Button variant="dark" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Schedule;
