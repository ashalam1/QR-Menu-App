import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Feedbackform = () => {
  const [tasteRating, setTasteRating] = useState(0);
  const [presentationRating, setPresentationRating] = useState(0);
  const [quantityRating, setQuantityRating] = useState(0);
  const [valueRating, setValueRating] = useState(0);
  const [suggestions, setSuggestions] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleRating = (setter, rating) => {
    setter(rating);
  };

  const renderStarRating = (rating, setter) => {
    return (
      <div className="flex space-x-2 text-3xl">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`cursor-pointer ${star <= rating ? 'text-yellow-400' : 'text-gray-400'}`}
            onClick={() => handleRating(setter, star)}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call to submit feedback)
    console.log({
      firstName,
      lastName,
      tasteRating,
      presentationRating,
      quantityRating,
      valueRating,
      suggestions,
    });
    alert("Thank you for your feedback!");
  };

  return (
    <div className="flex flex-col h-screen p-4 ">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div onClick={handleBack} className="cursor-pointer">
          <i className="fas fa-arrow-left fa-lg"></i>
        </div>
        <h1 className="text-xl text-yellow-400 font-bold text-center">Menu Feedback Form</h1>
        <div className="w-8"></div>
      </div>

      {/* Feedback Form */}
      <h1 className=" text-yellow-400 font-bold mb-4">We Value Your Feedback</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* First Name & Last Name */}
        <div className="flex space-x-4">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className=" text-black p-2 rounded-md w-full"
            style={{ backgroundColor: '#E5FCF5' }}
            required
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className=" text-black p-2 rounded-md w-full"
            style={{ backgroundColor: '#E5FCF5' }}
            required
          />
        </div>

        {/* Taste Rating */}
        <div>
          <label className="block mb-1">Please rate the taste:</label>
          {renderStarRating(tasteRating, setTasteRating)}
        </div>

        {/* Presentation Rating */}
        <div>
          <label className="block mb-1">Please rate the presentation:</label>
          {renderStarRating(presentationRating, setPresentationRating)}
        </div>

        {/* Quantity Rating */}
        <div>
          <label className="block mb-1">Please rate the quantity:</label>
          {renderStarRating(quantityRating, setQuantityRating)}
        </div>

        {/* Value for Money Rating */}
        <div>
          <label className="block mb-1">Please rate value for money:</label>
          {renderStarRating(valueRating, setValueRating)}
        </div>

        {/* Suggestions and Comments */}
        <div>
  <label className="block mb-1">Do you have any suggestions or comments?</label>
  <textarea
    value={suggestions}
    onChange={(e) => setSuggestions(e.target.value)}
    placeholder="Your comments..."
    className="text-black p-2 rounded-md w-full"
    style={{ backgroundColor: '#E5FCF5' }}
    rows="4"
  />
</div>


        {/* Submit Button */}
        <button
          type="submit"
          className="bg-yellow-500 text-black w-full py-2 rounded-md font-bold mt-4"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedbackform;
