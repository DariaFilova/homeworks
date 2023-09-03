import React, { useState } from 'react';

const PasswordField = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setStrength(calculatePasswordStrength(newPassword));
    console.log(strength, 'foo strength');
  };

  const calculatePasswordStrength = (password) => {
    if (password.length < 8) {
      return 'Weak';
    } else if (
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*]/.test(password)
    ) {
      return 'Strong';
    } else if (
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /\d/.test(password)
    ) {
      return 'Medium';
    } else {
      return 'Weak';
    }
  };

  const getPasswordColor = () => {
    if (password === '') {
      return '#000'; // Default color when the password is empty
    }
    switch (strength) {
      case 'Weak':
        return '#EC8B8B';
      case 'Medium':
        return '#FFC300';
      case 'Strong':
        return '#48C9B0';
      default:
        return '';
    }
  };

  const passwordRequirements = [
    {
      text: 'Must contain at least one lowercase letter (a-z)',
      fulfilled: /[a-z]/.test(password),
    },
    {
      text: 'Must contain at least one uppercase letter (A-Z)',
      fulfilled: /[A-Z]/.test(password),
    },
    {
      text: 'Must contain at least one digit (0-9)',
      fulfilled: /\d/.test(password),
    },
    {
      text: 'Must contain at least one special character (!@#$%^&*)',
      fulfilled: /[!@#$%^&*]/.test(password),
    },
    {
      text: 'Must be at least 8 characters long',
      fulfilled: password.length >= 8,
    },
  ];

  return (
    <div className='password'>
      <label>Password:</label>
      <input
        type='password'
        placeholder='Enter your password'
        value={password}
        onChange={handlePasswordChange}
        style={{ borderColor: getPasswordColor() }}
      />
      {password && strength && (
        <p style={{ color: getPasswordColor() }}>
          Password strength is {strength}
        </p>
      )}

      <ul>
        {passwordRequirements.map((requirement, index) => (
          <li
            key={index}
            style={{
              color: requirement.fulfilled ? '#48C9B0' : getPasswordColor(),
            }}
          >
            {requirement.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordField;

