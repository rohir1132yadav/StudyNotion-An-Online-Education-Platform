import React, { useState } from "react";
import "./rateus.css";
import ContactDetails from "../components/ContactPage/ContactDetails"
import Footer from "../components/common/Footer"
import ReviewSlider from "../components/common/ReviewSlider"

function RateUsComponent({ previousContent }) {
  const [errorRating, setErrorRating] = useState(false);
  const [errorFeedback, setErrorFeedback] = useState(false); 
   //creating error variables to detect when fields are empty to display span "Please enter xx" lines

  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  // const [showModal, setShowModal] = useState(false);

  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseOver = (index) => {
    setHoverRating(index);
  };

  const handleMouseOut = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    setRating(index);
  };


  const handleStarClick = (star) => {
    setRating(star);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    setErrorRating(false); //refresh everytime
    setErrorFeedback(false);
    if(!rating){
      setErrorRating(true);
      }
    if(!feedback){
      setErrorFeedback(true);
      }
    else if(feedback && rating){
      setRating(0);
      setFeedback("");
      alert("Thank you for the feedback!")
}
    // setShowModal(false); 
  };

  return (
    <>
    <div className="rate-us-page bg-richblack-900 mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
      <div className="rate-us-container lg:w-[60%] border border-richblack-600 ">
        <h2 className="mt-4 text-3xl leading-6 font-semibold text-richblack-5 text-center mb-2">We Value Your Feedback!</h2>
        {/* <h2 className="rate-us-heading">Rate Our Website</h2> */}
        <p className="mt-5 text-richblack-300">Please take a moment to rate your experience with our service. Your feedback helps us improve and provide you with the best service possible.</p>
        <div className="star-rating">
          {/* Stars go here */}
          
           {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <span
            key={index}
            className={`star ${index <= (hoverRating || rating) ? 'filled' : ''}`}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(index)}
          >
            &#9733;
          </span>
        );
      })}
        </div>
            {errorRating && (
            <span className="text-[12px] text-yellow-100 mb-30">
              *Please enter a rating.
            </span>
           )} 
        <textarea
          className="feedback-textarea bg-richblack-700 mt-7 p-3 text-[16px] leading-[24px] text-richblack-5 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none"
          placeholder="Enter feedback here"
          value={feedback}
          onChange={handleFeedbackChange}></textarea>
          {errorFeedback && (
          <span className="-mt-10 text-center text-[12px] text-yellow-100">
            *Please enter feedback.
          </span>
         )} 

          <div className="submit-container">
            <button className="mt-7 w-full rounded-md bg-yellow-50 px-6 py-3 text-center text-[16px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] transition-all duration-200 hover:scale-95 hover:shadow-none" onClick={handleSubmit}>
              Submit
            </button>

        </div>
     </div>
     <div className="lg:w-[40%]">
            <ContactDetails />
     </div>

    </div>
    <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8 ">
          Happy & Satisfied Learners!
        </h1>
        <ReviewSlider />
      </div>
    <Footer/>
</>
  );
}

export default RateUsComponent;
