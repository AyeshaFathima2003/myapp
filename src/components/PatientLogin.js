import React, { useState, useEffect } from 'react';

const PatientLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [seconds, setSeconds] = useState(30);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    // Validate phone number

    const isValidPhoneNumber = /^\d{10}$/.test(phoneNumber);

  if (isValidPhoneNumber) {
    setShowOTPInput(true);
    startTimer();
  } else {
    alert('Invalid phone number. Please enter a 10-digit number.');
  }
    setShowOTPInput(true);
    startTimer();
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    // Validate OTP (e.g., compare with server-generated OTP)
    console.log(`Entered OTP: ${otp}`);
  };

  const handleResendOTP = () => {
    setShowOTPInput(false);
    setPhoneNumber('');
    setSeconds(30);
  };

  const startTimer = () => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  };

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(startTimer);
    }
  }, [seconds]);

  return (
    <div>
      {showOTPInput ? (
        <div>
          <form onSubmit={handleOTPSubmit}>
            <input
              type="number"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
          <p>Time left: {seconds}s</p>
          {seconds === 0 && (
            <button onClick={handleResendOTP}>Resend OTP</button>
          )}
        </div>
      ) : (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="submit">Get OTP</button>
        </form>
      )}
    </div>
  );
};

export default PatientLogin;
