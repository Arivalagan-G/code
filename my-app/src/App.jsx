import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    ticketType: '',
    workshops: [],
    paymentMethod: '',
  });

  const [errors, setErrors] = useState({});
  const referralRef = useRef();
  const [referralCode, setReferralCode] = useState("");
  const registrationIdRef = useRef();

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleWorkshop = (workshop) => {
    setFormData(prev => {
      const exists = prev.workshops.includes(workshop);
      return {
        ...prev,
        workshops: exists
          ? prev.workshops.filter(w => w !== workshop)
          : [...prev.workshops, workshop],
      };
    });
  };

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
      else if (formData.firstName.trim().length < 3)
        newErrors.firstName = "First name must be at least 3 characters.";

      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";

      if (!formData.email.trim()) newErrors.email = "Email is required.";
      else if (!formData.email.includes("@mitrahsoft.com"))
        newErrors.email = "Email must include '@mitrahsoft.com'.";

      if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
      else if (!/^\d{10}$/.test(formData.phone.trim()))
        newErrors.phone = "Phone must be 10 digits.";
    } else if (step === 2) {
      if (!formData.ticketType) newErrors.ticketType = "Please select a ticket.";
      if (formData.workshops.length === 0)
        newErrors.workshops = "Please select at least one workshop.";
    } else if (step === 3) {
      if (!formData.paymentMethod) newErrors.paymentMethod = "Please select a payment method.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Read referral code here before moving from Step 2 → Step 3
  const handleNext = () => {
    if (validateStep()) {
      if (step === 2) {
        setReferralCode(referralRef.current?.value || "None"); // Read referral code while Step 2 is mounted
      }
      setStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => setStep(prev => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      registrationIdRef.current = `REG-${Date.now()}`;
      setStep(4);
    }
  };

  const handleQuickFill = (workshop) => {
    if (!formData.workshops.includes(workshop)) {
      setFormData(prev => ({
        ...prev,
        workshops: [...prev.workshops, workshop],
      }));
    }
  };

  return (

    <div className="container my-4 p-4 bg-light rounded shadow-sm">
      <h2 className="text-center mb-4">Tech Conference Registration</h2>

      {step === 1 && (
        <form>
          <div className="mb-3">
            <label className="form-label">First Name:</label>
            <input
              type="text"
              className="form-control"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
            />
            {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name:</label>
            <input
              type="text"
              className="form-control"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
            />
            {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={validateStep}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Phone:</label>
            <input
              type="text"
              className="form-control"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
            />
            {errors.phone && <div className="text-danger">{errors.phone}</div>}
          </div>

          <div className="text-center">
            <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
          </div>
        </form>
      )}

      {step === 2 && (
        <form>
          <div className="mb-3">
            <label className="form-label">Ticket Type:</label>
            <select
              className="form-select"
              value={formData.ticketType}
              onChange={(e) => handleChange('ticketType', e.target.value)}
            >
              <option value="">Select a ticket</option>
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
              <option value="VIP">VIP</option>
              <option value="Student">Student</option>
            </select>
            {errors.ticketType && <div className="text-danger">{errors.ticketType}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Workshops:</label>
            {['React', 'AI', 'Cloud', 'Security'].map(workshop => (
              <div key={workshop} className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={formData.workshops.includes(workshop)}
                  onChange={() => toggleWorkshop(workshop)}
                />
                <label className="form-check-label">{workshop}</label>
              </div>
            ))}
            {errors.workshops && <div className="text-danger">{errors.workshops}</div>}
          </div>

          <div className="mb-3">
            <button type="button" className="btn btn-success" onClick={() => handleQuickFill("React")}>
              Quick Fill Workshop: React
            </button>
          </div>

          <div className="mb-3">
            <label className="form-label">Referral Code:</label>
            <input
              type="text"
              className="form-control"
              ref={referralRef}
              placeholder="Enter if any"
            />
          </div>

          <div className="text-center">
            <button type="button" className="btn btn-secondary me-2" onClick={handlePrevious}>Previous</button>
            <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
          </div>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Payment Method:</label>
            {['Credit Card', 'UPI', 'PayPal'].map(method => (
              <div key={method} className="form-check">
                <input
                  type="radio"
                  name="paymentMethod"
                  className="form-check-input"
                  value={method}
                  checked={formData.paymentMethod === method}
                  onChange={(e) => handleChange('paymentMethod', e.target.value)}
                />
                <label className="form-check-label">{method}</label>
              </div>
            ))}
            {errors.paymentMethod && <div className="text-danger">{errors.paymentMethod}</div>}
          </div>

          <div className="text-center">
            <button type="button" className="btn btn-secondary me-2" onClick={handlePrevious}>Previous</button>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      )}

     {step === 4 && (
  <div className="summary">
    <h3>Registration Summary</h3>
    <p><strong>Registration ID = </strong>{registrationIdRef.current}</p>
    <p><strong>Name = </strong>{formData.firstName} {formData.lastName}</p>
    <p><strong>Email = </strong>{formData.email}</p>
    <p><strong>Phone = </strong>{formData.phone}</p>
    <p><strong>Ticket = </strong>{formData.ticketType}</p>
    <p><strong>Workshops = </strong>{formData.workshops.join(", ") || "None"}</p>
    <p><strong>Payment = </strong>{formData.paymentMethod}</p>
    <p><strong>Referral = </strong>{referralCode}</p>
  </div>
)}

  </div>

  
)}



export default App
