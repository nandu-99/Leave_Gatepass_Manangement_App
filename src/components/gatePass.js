import React, { useState } from "react";
// import "./gatePass.css"; // Assuming you have a CSS file named gatePass.css
import styles from './gatePass.module.css';



function ExitDetailsForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    programEnrolled: "",
    enrollmentYear: "",
    timeOfExit: "",
    dateOfExit: "",
    dateOfReturn: "",
    timeOfReturn: "",
    purposeOfExit: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data here
    console.log(formData);
  };

  return (
    <div className={styles["exit-details-form1"]}>
      <div className={styles["heading"]}>
        <h1>Exit Details Form</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Section 1: Personal Details and Enrollment Details */}
        <div className={styles["formDiv"]}>
          <div className={styles["section1"]}>
            <h2>Student Information</h2>
            <div className={styles["form-group"]}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                type="tel"
                name="mobileNumber"
                id="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="programEnrolled">Program Enrolled</label>
              <select
                id="programme"
                name="programme"
                value={formData.programme}
                onChange={handleChange}
              >
                <option value="">Select Programme</option>
                <option value="B.Design">B.Design</option>
                <option value="Makers Undergrad">Makers Undergrad</option>
                <option value="Business Analytics with KPMG">
                  Business Analytics with KPMG
                </option>
                <option value="B.Tech in CS and AI with Newton School of Technology">
                  B.Tech in CS and AI with Newton School of Technology
                </option>
                <option value="BSc Hons in Psychology">
                  BSc Hons in Psychology
                </option>
              </select>
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="enrollmentYear">Enrollment Year</label>
              <input
                type="number"
                name="enrollmentYear"
                id="enrollmentYear"
                value={formData.enrollmentYear}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* Section 2: Exit Details */}
          <div className={styles["section2"]}>
            <h2>Exit Information</h2>
            <div className={styles["form-group"]}>
              <label htmlFor="timeOfExit">Time of Exit</label>
              <input
                type="time"
                name="timeOfExit"
                id="timeOfExit"
                value={formData.timeOfExit}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="dateOfExit">Date of Exit</label>
              <input
                type="date"
                name="dateOfExit"
                id="dateOfExit"
                value={formData.dateOfExit}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="timeOfReturn">Time of Return</label>
              <input
                type="time"
                name="timeOfReturn"
                id="timeOfReturn"
                value={formData.timeOfReturn}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="dateOfReturn">Date of Return</label>
              <input
                type="date"
                name="dateOfReturn"
                id="dateOfReturn"
                value={formData.dateOfReturn}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        {/* Section 3: Purpose of Exit and Submit Button */}
        <div className={styles["section3"]}>
          <div className={styles["form-group"]}>
            <label htmlFor="purposeOfExit">Purpose of Exit</label>
            <textarea
              name="purposeOfExit"
              id="purposeOfExit"
              value={formData.purposeOfExit}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles["submitButton"]}>
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
}

export default ExitDetailsForm;
