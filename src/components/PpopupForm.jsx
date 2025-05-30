import React, { useState, useEffect } from 'react';
import styles from '../styles/Popuoform.module.css';
import ThankYouPopup from './ThankYouPopup';

const PopupForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    languages: [],
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSubmit(formData);
      setErrors({});
      setSubmitted(true);
    }
  };

  const handleLanguageChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.includes(value)
        ? prev.languages.filter((lang) => lang !== value)
        : [...prev.languages, value],
    }));
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted, onClose]);

  if (submitted) {
    return (
      <div className={styles['modal-overlay']}>
        <div className={styles.modal}>
          <ThankYouPopup />
        </div>
      </div>
    );
  }

  return (
    <div className={styles['modal-overlay']}>
      <div className={styles.modal}>
        <h2>Get Started Today!</h2>
        <p>Fill in your details and take control of your tasks.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className={styles['two-column']}>
            <div className={styles.field}>
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
              {errors.firstName && <div className={styles.error}>{errors.firstName}</div>}
            </div>

            <div className={styles.field}>
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
              {errors.lastName && <div className={styles.error}>{errors.lastName}</div>}
            </div>
          </div>

          <div className={`${styles.field} ${styles.gender}`}>
            <label>Gender</label>
            <div className={styles['gender-options']}>
              {['Male', 'Female'].map((genderOption) => (
                <label key={genderOption}>
                  <input
                    type="radio"
                    name="gender"
                    value={genderOption}
                    checked={formData.gender === genderOption}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  />
                  {genderOption}
                </label>
              ))}
            </div>
            {errors.gender && <div className={styles.error}>{errors.gender}</div>}
          </div>

          <div className={styles.field}>
            <label>Languages</label>
            <div className={styles['language-options']}>
              {['English', 'Hindi', 'Marathi'].map((lang) => (
                <label key={lang}>
                  <input
                    type="checkbox"
                    value={lang}
                    checked={formData.languages.includes(lang)}
                    onChange={handleLanguageChange}
                  />
                  {lang}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <div className={styles.error}>{errors.email}</div>}
          </div>

          <div className={styles.terms}>
            <label>
              <input type="checkbox" required /> I agree to the terms and conditions
            </label>
          </div>

          <div className={styles['button-group']}>
            <button type="submit" className={styles['submit-button']}>
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
