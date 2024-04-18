// LeaveForm.js

import  { useState } from 'react';
import styles from './leaveFormPage.module.css';

function LeaveForm(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    batch: '',
    programme: '',
    startDate: '',
    endDate: '',
    reason: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleDocumentUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      documents: files,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    // Check for empty fields
    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = true;
      }
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.leaveFormContainer}>
      <form className={styles.leaveForm} id="leaveForm" onSubmit={handleSubmit}>
        <h1>Learners Leave</h1>
        <p className={styles.note}>Please Note - Requests received after cut off time (9:00PM) will be processed/actioned on the next working day.</p>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={errors.name ? styles.errorInput : ''} />
          {errors.name && <span className={styles.error}>Name is required</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={errors.email ? styles.errorInput : ''} />
          {errors.email && <span className={styles.error}>Email is required</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="batch">Batch</label>
          <input type="text" id="batch" name="batch" maxLength="4" value={formData.batch} onChange={handleChange} required className={errors.batch ? styles.errorInput : ''} />
          {errors.batch && <span className={styles.error}>Batch is required</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="programme">Programme</label>
          <select id="programme" name="programme" value={formData.programme} onChange={handleChange} required className={errors.programme ? styles.errorInput : styles.programme}>
            <option value="">Select Programme</option>
            <option value="B.Design">B.Design</option>
            <option value="Makers Undergrad">Makers Undergrad</option>
            <option value="Business Analytics with KPMG">Business Analytics with KPMG</option>
            <option value="B.Tech in CS and AI with Newton School of Technology">B.Tech in CS and AI with Newton School of Technology</option>
            <option value="BSc Hons in Psychology">BSc Hons in Psychology</option>
          </select>
          {errors.programme && <span className={styles.error}>Programme is required</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="startDate">Start Date</label>
          <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} required className={errors.startDate ? styles.errorInput : ''} />
          {errors.startDate && <span className={styles.error}>Start Date is required</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="endDate">End Date</label>
          <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} required className={errors.endDate ? styles.errorInput : ''} />
          {errors.endDate && <span className={styles.error}>End Date is required</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="reason">Reason</label>
          <textarea id="reason" name="reason" value={formData.reason} onChange={handleChange} required className={errors.reason ? styles.errorInput : ''}></textarea>
          {errors.reason && <span className={styles.error}>Reason is required</span>}
        </div>
        <div className={styles.formGroup}>
        <label htmlFor="medical" >Medical Issue</label>
        <input type="file" id="medical" name="medical" multiple onChange={handleDocumentUpload} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LeaveForm;
