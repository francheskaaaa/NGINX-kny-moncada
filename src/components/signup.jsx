import React, { useState } from "react";
import AuthImg from "../assets/AuthImg.png";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import {Link, useNavigate} from "react-router-dom";

const Signup = () => {
  // States for steps and fields
  // const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Tracks the current step
  const [formData, setFormData] = useState({}); // Stores form data

  // Handle changes in the input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update the formData state
  };

  // Handle next step logic
  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1); // Increment step if not on the final step
    } else {
      handleSubmit(); // Final submission
    }
  };

  // Example submission logic
  const handleSubmit = () => {
    console.log("Final Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="h-screen w-screen bg-gray-100 text-gray-900 flex justify-center items-center overflow-hidden">
      <div className="lg:w-2/3 xl:w-8/12 max-w-screen-xl bg-white shadow sm:rounded-lg flex">
        {/* Left side with Background Image */}
        <div className=" rounded-l-lg lg:w-1/2 xl:w-8/12 p-6 sm:p-12 bg-gradient-to-br from-purple-600 via-blue-400 via-green-300 to-yellow-300">
          <div
            className="w-full bg-contain bg-center bg-no-repeat h-full "
            style={{
              backgroundImage: `url(${logo})`,
            }}
          ></div>
        </div>

        {/* Right side with Form */}
        <div className="lg:w-1/2 xl:w-8/12 p-6 sm:p-12 flex flex-col justify-center">
          {/* Header Section */}
          <div className="flex items-center mb-8">
            <img
              src={logo}
              alt="User"
              className="w-14 h-14 rounded-full mr-4"
            />
            <div>
              <h2 className="text-lg font-bold text-gray-900">KNY MONCADA</h2>
              <h3 className="text-sm text-gray-600">Become a Member</h3>
            </div>
          </div>

          {/* Step-based Form Sections */}
          <form className="w-full max-w-md mx-auto">
  {step === 1 && (
    <div>
      {/* Step 1: Informed Consent */}
      <h1 className="text-xl font-bold mb-4">Informed Consent</h1>
      <p className="text-sm text-gray-600 text-justify mb-4">
        I hereby authorize Kaya Natin! Youth- Moncada to collect and process all
        the data indicated. I understand that all my personal information is protected
        by RA 10173, Data Privacy Act of 2012, and I agree to provide truthful information.
      </p>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700">Do you agree?</label>
        <div className="flex justify-center items-center space-x-20 w-full">
          <label className="flex items-center">
            <input
              type="radio"
              name="consent"
              value="agree"
              className="mr-2 accent-gray-400 focus:accent-violet-700"
              onChange={handleInputChange}
              required
            />
            <span className="text-gray-700">Agree</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="consent"
              value="disagree"
              className="mr-2 accent-gray-400 focus:accent-violet-700"
              onChange={handleInputChange}
            />
            <span className="text-gray-700">Disagree</span>
          </label>
        </div>
      </div>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-violet-700 mb-4"
        onChange={handleInputChange}
        required
      />
    </div>
  )}

  {step === 2 && (
    <div>
      {/* Step 2: Personal Details */}
      <h1 className="text-xl font-bold mb-4">Personal Details</h1>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-violet-700 mb-4"
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="middleName"
        placeholder="Middle Name"
        className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-violet-700 mb-4"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-violet-700 mb-4"
        onChange={handleInputChange}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-violet-700 mb-4"
        onChange={handleInputChange}
        required
      />
      <input
        type="date"
        name="birthday"
        placeholder="Birthday"
        className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm text-gray-500 focus:outline-none focus:border-violet-700 mb-4"
        onChange={handleInputChange}
      />
    </div>
  )}

  {step === 3 && (
    <div>
      {/* Step 3: Organization Details */}
      <h1 className="text-xl font-bold mb-4">Organization Membership</h1>
      <label className="block mb-2 text-gray-700">Are you a member of any other organization?</label>
      <div className="flex items-center space-x-4 mb-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="memberOrg"
            value="yes"
            className="mr-2 accent-gray-400 focus:accent-violet-700"
            onChange={handleInputChange}
          />
          <span className="text-gray-700">Yes</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="memberOrg"
            value="no"
            className="mr-2 accent-gray-400 focus:accent-violet-700"
            onChange={handleInputChange}
          />
          <span className="text-gray-700">No</span>
        </label>
      </div>
      <input
        type="text"
        name="organization"
        placeholder="Organization Name"
        className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-violet-700 mb-4"
        onChange={handleInputChange}
      />
    </div>
  )}

  {step === 4 && (
    <div>
      {/* Step 4: Committee Selection */}
      <h1 className="text-xl font-bold mb-4">Contribute to a Committee</h1>
      <label className="block mb-4">
        <strong>Which committee do you think you can contribute the most?</strong>
      </label>
      <div className="space-y-2">
        {[
          "Campaign and Advocacy",
          "Programs and Events",
          "Social Media and Communications",
          "Finance",
          "Membership",
        ].map((committee) => (
          <label
            key={committee}
            className={`block px-4 py-2 rounded-lg bg-gray-100 border cursor-pointer ${
              formData.committee === committee ? "border-violet-700" : "border-gray-300"
            }`}
          >
            <input
              type="radio"
              name="committee"
              value={committee}
              className="mr-2 accent-gray-400 focus:accent-violet-700"
              onChange={handleInputChange}
            />
            {committee}
          </label>
        ))}
      </div>
    </div>
  )}

  {/* Navigation Button */}
  <div className={`flex ${step === 1 ? "justify-end" : "justify-between"} mt-6`}>

  {/* Back Button - Shown only on Steps 2-4 */}
  {step > 1 && (
    <button
      type="button"
      onClick={() => setStep(step - 1)}
      className="py-2 px-4 rounded-lg bg-gray-300 text-gray-700 hover:bg-gray-400"
    >
      Back
    </button>
  )}

  {/* Next/Submit Button */}
  <button
    type="button"
    onClick={handleNextStep}
    className={`py-2 px-4 rounded-lg ${
      step === 4
        ? "bg-green-700 hover:bg-green-600"
        : "bg-violet-700 hover:bg-violet-600"
    } text-white`}
  >
    {step === 4 ? "Submit" : "Next"}
  </button>
</div>
            <p className="mt-6 text-sm text-center text-violet-700">
  <Link to="/login" className="hover:underline font-semibold">
    Already Have an Account? Login
  </Link>
</p>


</form>
        </div>
      </div>
    </div>
  );
};

export default Signup;