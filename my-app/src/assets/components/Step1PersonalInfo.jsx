import React from 'react';

const Step1PersonalInfo = ({ personal, setPersonal, errors, setErrors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonal({ ...personal, [name]: value });
  };

  const liveEmailValidation = () => {
    if (personal.email && !personal.email.includes("@mitrahsoft.com")) {
      setErrors({ ...errors, email: "Email must include '@mitrahsoft.com'." });
    } else {
      setErrors({ ...errors, email: null });
    }
  };

  return (
    <div>
      <label>First Name:</label>
      <input
        name="firstName"
        value={personal.firstName}
        onChange={handleChange}
      />
      {errors.firstName && <div className="error">{errors.firstName}</div>}

      <label>Last Name:</label>
      <input
        name="lastName"
        value={personal.lastName}
        onChange={handleChange}
      />
      {errors.lastName && <div className="error">{errors.lastName}</div>}

      <label>Email:</label>
      <input
        name="email"
        value={personal.email}
        onChange={handleChange}
        onBlur={liveEmailValidation}
      />
      {errors.email && <div className="error">{errors.email}</div>}

      <label>Phone:</label>
      <input
        name="phone"
        value={personal.phone}
        onChange={handleChange}
      />
      {errors.phone && <div className="error">{errors.phone}</div>}
    </div>
  );
};

export default Step1PersonalInfo;
