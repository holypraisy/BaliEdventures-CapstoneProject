import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PaymentForm() {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const [errors, setErrors] = useState({});
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Simulate payment process (you would replace this with actual payment logic)
      setTimeout(() => {
        setPaymentSuccess(true);
        setTimeout(() => {
          navigate('/');
        }, 3000);
      }, 2000); // Simulating a delay of 2 seconds for payment process
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.cardNumber.trim()) {
      errors.cardNumber = 'Card Number is required';
    } else if (!/^\d+$/.test(formData.cardNumber.trim())) {
      errors.cardNumber = 'Card Number must contain only digits';
    }
    if (!formData.expiryDate.trim()) {
      errors.expiryDate = 'Expiry Date is required';
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate.trim())) {
      errors.expiryDate = 'Expiry Date must be in MM/YY format';
    }
    if (!formData.cvv.trim()) {
      errors.cvv = 'CVV is required';
    } else if (!/^\d{3,4}$/.test(formData.cvv.trim())) {
      errors.cvv = 'CVV must be a 3 or 4 digit number';
    }
    return errors;
  };

  return (
    <div className='max-w-md mx-auto mt-24 p-5 border rounded-lg shadow-lg'>
      <h2 className='text-2xl font-semibold mb-5'>Payment Form</h2>
      {paymentSuccess && (
        <div className='bg-green-100 text-green-700 p-4 mb-5 rounded'>
          Payment successful! Redirecting to home page...
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-lg font-medium mb-2' htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : ''}`}
            required
          />
          {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
        </div>
        <div className='mb-4'>
          <label className='block text-lg font-medium mb-2' htmlFor='cardNumber'>Card Number</label>
          <input
            type='text'
            id='cardNumber'
            name='cardNumber'
            value={formData.cardNumber}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${errors.cardNumber ? 'border-red-500' : ''}`}
            required
          />
          {errors.cardNumber && <p className='text-red-500 text-sm mt-1'>{errors.cardNumber}</p>}
        </div>
        <div className='mb-4'>
          <label className='block text-lg font-medium mb-2' htmlFor='expiryDate'>Expiry Date</label>
          <input
            type='text'
            id='expiryDate'
            name='expiryDate'
            value={formData.expiryDate}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${errors.expiryDate ? 'border-red-500' : ''}`}
            placeholder='MM/YY'
            required
          />
          {errors.expiryDate && <p className='text-red-500 text-sm mt-1'>{errors.expiryDate}</p>}
        </div>
        <div className='mb-4'>
          <label className='block text-lg font-medium mb-2' htmlFor='cvv'>CVV</label>
          <input
            type='text'
            id='cvv'
            name='cvv'
            value={formData.cvv}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${errors.cvv ? 'border-red-500' : ''}`}
            required
          />
          {errors.cvv && <p className='text-red-500 text-sm mt-1'>{errors.cvv}</p>}
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}
