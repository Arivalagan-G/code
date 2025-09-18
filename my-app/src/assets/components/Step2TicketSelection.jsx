import React from 'react';

const Step2TicketSelection = ({
  ticketType,
  setTicketType,
  workshops,
  setWorkshops,
  referralCodeRef,
  errors,
  setErrors
}) => {
  const handleWorkshopChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setWorkshops([...workshops, value]);
    } else {
      setWorkshops(workshops.filter((w) => w !== value));
    }
  };

  const addWorkshop = (name) => {
    if (!workshops.includes(name)) {
      setWorkshops([...workshops, name]);
    }
  };

  return (
    <div>
      <label>Ticket Type:</label>
      <select
        value={ticketType}
        onChange={(e) => setTicketType(e.target.value)}
      >
        <option value="">Select a ticket</option>
        <option value="Standard">Standard</option>
        <option value="Premium">Premium</option>
        <option value="VIP">VIP</option>
        <option value="Student">Student</option>
      </select>
      {errors.ticketType && <div className="error">{errors.ticketType}</div>}

      <label>Workshops:</label>
      <div>
        {["React", "AI", "Cloud", "Security"].map((w) => (
          <label key={w}>
            <input
              type="checkbox"
              value={w}
              checked={workshops.includes(w)}
              onChange={handleWorkshopChange}
            />
            {w}
          </label>
        ))}
      </div>
      {errors.workshops && <div className="error">{errors.workshops}</div>}

      <div className="quick-fill">
        <button type="button" onClick={() => addWorkshop("React")}>
          Quick Fill Workshop: React
        </button>
      </div>

      <label>Referral Code:</label>
      <input
        name="referralCode"
        ref={referralCodeRef}
        placeholder="Enter if any"
      />
    </div>
  );
};

export default Step2TicketSelection;
