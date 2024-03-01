import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Apps from "./Apps";
// import $ from "jquery";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useRef } from 'react';

function App() {

  // const [selectedDate, setSelectedDate] = useState(0);
  // const [sum, setSum] = useState(0);
//  Plus minus start
const input1Ref = useRef(0);
const input2Ref = useRef(0);
const input3Ref = useRef(0);
const [total, setTotal] = useState(0);
// Function to handle the plus button click
const handlePlus = () => {
  // Increment the values in the refs
  input1Ref.current = input1Ref.current + 1;

  // Update the input field values
  updateInputValues();
};

const handlePlus1 = () => {
  // Increment the values in the refs
  input2Ref.current = input2Ref.current + 1;
  // Update the input field values
  updateInputValues();
};

const handlePlus2 = () => {
  // Increment the values in the refs
  input3Ref.current = input3Ref.current + 1;
  // Update the input field values
  updateInputValues();
};

// Function to handle the minus button click
const handleMinus = () => {
  // Decrement the values in the refs
  input1Ref.current = input1Ref.current - 1;
  // Update the input field values
  updateInputValues();
};

const handleMinus1 = () => {
  // Decrement the values in the refs
  input2Ref.current = input2Ref.current - 1;
  // Update the input field values
  updateInputValues();
};

const handleMinus2 = () => {
  // Decrement the values in the refs

  input3Ref.current = input3Ref.current - 1;
  // Update the input field values
  updateInputValues();
};

// Function to update the input field values
const updateInputValues = () => {
  // Get the input field DOM elements using the refs
  const input1 = document.getElementById('input1');
  const input2 = document.getElementById('input2');
  const input3 = document.getElementById('input3');
  // Update the input field values with the values in the refs
  input1.value = input1Ref.current;
  input2.value = input2Ref.current;
  input3.value = input3Ref.current;

  const newTotal = input1Ref.current + input2Ref.current + input3Ref.current;
  setTotal(newTotal);

};
//  Plus minus end

  const [selectedOption, setSelectedOption] = useState("oneWay");

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };


  const handleRadioChange = (value) => {
    setSelectedOption(value);
  };

 

  // submit form start

  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departure: '',
    return: '',
    adults: '',
    childs: '',
    infrants: '',
    class: '',

    // Add other form fields as needed
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any form validation or submit data to a server
    // For this example, we'll just update the state with the submitted data
    setSubmittedData(formData);

    const newTotal = input1Ref.current + input2Ref.current + input3Ref.current;
    setTotal(newTotal);
    
};


  // submit form end

  return (
    <>
      <div className="container mt-5">
        <div className="caption p-2">
          <p className="flight_icons_plane mt-3">
            <img
              width="18"
              height="18"
              src="https://img.icons8.com/ios-filled/18/144383/airport.png"
              alt="airport"
              className="mx-2"
            />
            Flights
          </p>
          <div>
            <label className="mx-3">
              <input
                className="mx-1"
                type="radio"
                value="oneWay"
                checked={selectedOption === "oneWay"}
                onChange={() => handleRadioChange("oneWay")}
              />
              One Way
            </label>

            <label>
              <input
                className="mx-1"
                type="radio"
                value="roundTrip"
                checked={selectedOption === "roundTrip"}
                onChange={() => handleRadioChange("roundTrip")}
              />
              Round Trip
            </label>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row mt-4">
              <div className="col-6 col-lg-3 mb-2">
                <div className="form-group">
                  <img
                    width="23"
                    height="23"
                    src="https://img.icons8.com/ios/23/144383/marker--v1.png"
                    alt="marker--v1"
                    className="icons_search mx-2"
                  />
                  <input
                    className="form-control icons_search_input inputbox autocomplete"
                    id="sourceLocation"
                    type="text"
                    name="from"
                    placeholder="Departing From?" value={formData.from} onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-6 col-lg-3 mb-2">
                <div className="form-group">
                  <img
                    width="23"
                    height="23"
                    src="https://img.icons8.com/ios/23/144383/marker--v1.png"
                    alt="marker--v1"
                    className="icons_search mx-2"
                  />
                  <input
                    className="form-control icons_search_input destinationLocation"
                    id="destinationLocation"
                    type="text"
                    name="to"
                    placeholder="Going To?" value={formData.to} onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-2 col-6 mb-2">
                <div className="form-group">
                  {selectedOption === "oneWay" && (
                    <div>

                      <input className="form-control" type="date" name="departure" value={formData.departure} onChange={handleChange} /> 

                    </div>
                  )}

                  {selectedOption === "roundTrip" && (
                    <div className="d-flex">
                      <input className="form-control" type="date" name="departure" value={formData.departure} onChange={handleChange} /> 
                      <input className="form-control" type="date" name="return" value={formData.return} onChange={handleChange} /> 
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-2 col-6 mb-2">
                <img
                  width="23"
                  height="23"
                  src="https://img.icons8.com/ios/23/144383/conference-call--v1.png"
                  className="icons_search mx-2"
                  alt="conference-call--v1"
                />
                <button
                  className="btn col-lg-12 col-md-12 form-control testraveler dropdown-toggle text-black"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 {total}  Traveler
                </button>
                <ul className="dropdown-menu dropdown-main">
                  <div className="row">
                    <div className="col-lg-12">
                      <li>
                        <div className="form-group dropdown-item adult_drop mt-2">
                     
                          <div className="minus-plus">
                            <h6>Adults</h6>
                            <div className="number">
                            <img
                                className="minus"
                                width="18"
                                height="18"
                                src="https://img.icons8.com/ios/18/minus.png"
                                alt="minus"
                                onClick={handleMinus}
                              />
        <input type="text" id="input1" defaultValue="0"  name="adults" />
        <img
                                className="plus"
                                width="18"
                                height="18"
                                src="https://img.icons8.com/ultraviolet/18/plus--v1.png"
                                alt="plus--v1"
                                onClick={handlePlus}
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                    </div>

                    <div className="col-lg-12">
                      <li>
                        <div className="form-group dropdown-item adult_drop mt-2">
                          <div className="minus-plus">
                            <h6>Child</h6>
                            <div className="number">
                            <img
                                className="minus"
                                width="18"
                                height="18"
                                src="https://img.icons8.com/ios/18/minus.png"
                                alt="minus"
                                onClick={handleMinus1}
                              />
        <input type="text" id="input2" defaultValue="0" />
        <img
                                className="plus"
                                width="18"
                                height="18"
                                src="https://img.icons8.com/ultraviolet/18/plus--v1.png"
                                alt="plus--v1"
                                onClick={handlePlus1}
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                    </div>

                    <div className="col-lg-12">
                      <li>
                        <div className="form-group dropdown-item adult_drop mt-2">
                          <div className="minus-plus">
                            <h6>Infants</h6>
                            <div className="number">
                            <img
                                className="minus"
                                width="18"
                                height="18"
                                src="https://img.icons8.com/ios/18/minus.png"
                                alt="minus"
                                onClick={handleMinus2}
                              />
        <input type="text" id="input3" defaultValue="0" />
        <img
                                className="plus"
                                width="18"
                                height="18"
                                src="https://img.icons8.com/ultraviolet/18/plus--v1.png"
                                alt="plus--v1"
                                onClick={handlePlus2}
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                </ul>
              </div>

              <div className="col-lg-2 col-6 mb-2">
                <div className="form-group dropdown-item ">
                  <div className="number-class">
                    <select  id="Class" className="form-control" value={formData.class} onChange={handleChange}>
                      <option value="enconomy" >Economy</option>
                      <option value="first" >First</option>
                      <option value="business">Business</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-6 mb-2">
                <button className="btn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <Apps />


        {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Name: {submittedData.from}</p>
          <p>Email: {submittedData.to}</p>
          <p>Depature: {submittedData.departure}</p>
          <p>return: {submittedData.return}</p>
          <p>adults: {total}</p>
          <p>class: {submittedData.class}</p>

          
          {/* Display other submitted data as needed */}
        </div>
      )}

      </div>
    </>
  );
}

export default App;
