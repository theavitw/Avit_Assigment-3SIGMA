import React, { useState } from "react";
import Icon1 from "../../public/Icons/FildIcon/Icon1.png";
import Icon2 from "../../public/Icons/FildIcon/Icon2.png";
import Icon3 from "../../public/Icons/FildIcon/Icon3.png";
import Icon4 from "../../public/Icons/FildIcon/Icon4.png";
import Icon5 from "../../public/Icons/FildIcon/Icon5.png";
import Icon6 from "../../public/Icons/FildIcon/Icon6.png";
import Icon7 from "../../public/Icons/FildIcon/Icon7.png";
import Icon8 from "../../public/Icons/FildIcon/Icon8.png";
import Icon9 from "../../public/Icons/FildIcon/Icon9.png";
import GoogleMapReact from "google-map-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
const FormComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const [time, settime] = useState("");

  const customInput = (
    <input type="text" value={selectedDate} readOnly name="dateval" />
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    options: "",
    products: "",
    value: "",
    timeval: "",
    dateval: "",
    note: "",
  });
  const defaultProps = {
    center: {
      lat: 28.4595,
      lng: 77.0266,
    },
    zoom: 11,
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    formData.dateval = date;
  };
  const handleTimeChange = (time) => {
    settime(time);
    formData.timeval = time;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="mx-auto mt-32">
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label htmlFor="name" className="block text-base font-bold pl-2">
            Name<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <img
              src={Icon4}
              alt="Logo"
              className="absolute h-5 w-5 left-6 top-[20px]"
            />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="border rounded-md w-full p-3 pl-20 mt-1 focus:outline-none focus:ring focus:border-blue-300 text-base"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-base font-bold pl-2">
            Email<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <img
              src={Icon2}
              alt="Logo"
              className="absolute h-5 w-5 left-6 top-[20px]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Example@anyemail.com"
              className="border rounded-md w-full p-3 pl-20 mt-1 focus:outline-none focus:ring focus:border-blue-300 text-base"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block text-base font-bold pl-2">
            Phone Number<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <img
              src={Icon1}
              alt="Logo"
              className="absolute h-5 w-5 left-6 top-[20px]"
            />
            <input
              type="tel"
              name="phone"
              pattern="^\+91[6789]\d{9}$"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 8800688763"
              className="border rounded-md w-full p-3 pl-20 mt-1 focus:outline-none focus:ring focus:border-blue-300 text-base"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="address" className="block text-base font-bold pl-2">
            Address
          </label>
          <div className="relative">
            <img
              src={Icon5}
              alt="Logo"
              className="absolute h-5 w-5 left-6 top-[20px]"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Gugurgram ,India"
              className="border rounded-md w-full p-3 pl-20 mt-1 focus:outline-none focus:ring focus:border-blue-300 text-base"
            />
          </div>
        </div>
        <div style={{ height: "40vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          ></GoogleMapReact>
        </div>
        <div>
          <label htmlFor="saleValue" className="block text-base font-bold pl-2">
            Sale Value
          </label>
          <div className="relative">
            <img
              src={Icon9}
              alt="Logo"
              className="absolute h-5 w-5 left-6 top-[20px]"
            />
            <input
              type="number"
              name="value"
              value={formData.saleValue}
              onChange={handleChange}
              placeholder="50,00,000"
              className="border rounded-md w-full p-3 pl-20 mt-1 focus:outline-none focus:ring focus:border-blue-300 text-base"
            />
          </div>
        </div>
        <div>
          <label htmlFor="date" className="block text-base font-bold pl-2">
            Date
          </label>
          <div className="relative">
            <img
              src={Icon3}
              alt="Logo"
              className="absolute h-5 w-5 left-6 top-[20px] z-10"
            />
            <DatePicker
              selected={selectedDate}
              name="dateval"
              value={formData.dateval}
              onChange={handleDateChange}
              dateFormat="dd MMMM yyyy"
              placeholderText="29 August 2023"
              customInput={customInput}
              className="border rounded-md w-full p-3 pl-20 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            />
            <div></div>
          </div>
        </div>
        <div>
          <label htmlFor="time" className="block text-base font-bold pl-2">
            Time
          </label>
          <div className="relative">
            <img
              src={Icon6}
              alt="Logo"
              className="absolute h-5 w-5 left-6 top-[20px] z-10"
            />

            <TimePicker
              onChange={handleTimeChange}
              name="timeval"
              value={time}
              format="HH:mm a"
              className="!w-full !p-3 !pl-20 !mt-1"
              disableClock={true}
              clockIcon={false}
              clearIcon={false}
              hourPlaceholder="20"
              minutePlaceholder="21"
            />
          </div>
        </div>
        <div>
          <label htmlFor="options" className="block text-base font-bold pl-2">
            Options
          </label>
          <div className="relative">
            <img
              src={Icon8}
              alt="Logo"
              className="absolute h-5 w-5 left-6 top-[20px]"
            />
            <select
              name="options"
              value={formData.options}
              onChange={handleChange}
              className="border rounded-md w-full p-4 pl-20 mt-1 focus:outline-none focus:ring focus:border-blue-300 text-base"
            >
              <option value="0" hidden>
                Select Options
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="products" className="block text-base font-bold pl-2">
            Products
          </label>
          <div className="relative">
            <img
              src={Icon7}
              alt="Logo"
              className="absolute h-5 w-5 left-6 top-[20px]"
            />
            <select
              name="products"
              onChange={handleChange}
              value={formData.products}
              className="border rounded-md w-full p-4 pl-20 mt-1 focus:outline-none focus:ring focus:border-blue-300 text-base"
              defaultValue={0}
            >
              <option value="0" hidden></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
        <div className="pt-5">
          <label htmlFor="note" className="block text-base font-bold pl-2">
            Note
          </label>
          <div className="relative">
            <textarea
              name="note"
              rows="5"
              value={formData.note}
              onChange={handleChange}
              placeholder="Enter note"
              className="border rounded-md w-full re3ize-none p-2 pl-20 mt-1 focus:outline-none focus:ring focus:border-blue-300 text-base"
            />
          </div>
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="mt-24 bg-blue-900 hover:bg-blue-700 text-white font-bold py-3 px-4 mb-4 w-full rounded"
          >
            Add Lead
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
