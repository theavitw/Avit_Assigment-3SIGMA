import React, { useState } from 'react';
import Icon1 from "../../public/Icons/FildIcon/Icon1.png"
import Icon2 from "../../public/Icons/FildIcon/Icon2.png"
import Icon3 from "../../public/Icons/FildIcon/Icon3.png"
import Icon4 from "../../public/Icons/FildIcon/Icon4.png"
import Icon5 from "../../public/Icons/FildIcon/Icon5.png"
import Icon6 from "../../public/Icons/FildIcon/Icon6.png"
import Icon7 from "../../public/Icons/FildIcon/Icon7.png"
import Icon8 from "../../public/Icons/FildIcon/Icon8.png"
import Icon9 from "../../public/Icons/FildIcon/Icon9.png"
import GoogleMapReact from 'google-map-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import moment from 'moment';
import 'react-time-picker/dist/TimePicker.css';
const FormComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  
  const [value, onChange] = useState('');


  const customInput = (
    <input
      type="text"
      value={selectedDate ? moment(selectedDate).format('DD MMMM YYYY') : ''}
      readOnly
    />
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    saleValue: '',
    options: '',
    products: '',
    
  });
  const defaultProps = {
    center: {
      lat: 28.4595,
      lng: 77.0266
    },
    zoom: 11
  };
  const HandleTimeChange = (time) => {
    setselectedTime(time);
    console.log(time);
  }
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedDate(date);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData); // For demonstration, log form data to console
  };

  return (
    <div className="mx-auto mt-32">
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label htmlFor="name" className="block text-base font-bold">
            Name<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <img
              src={Icon4}
              alt="Logo"
              className="absolute h-5 w-5 left-3 top-4"
            />
            <input
              type="text"
              name="name"
              
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="border rounded-md w-full p-2 pl-10 mt-1 focus:outline-none focus:ring focus:border-blue-300 text-base"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-base font-bold">
            Email<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <img
              src={Icon2}
              alt="Logo"
              className="absolute h-5 w-5 left-3 top-4"
            />
            <input
              type="email"
              name="email"
              
              value={formData.email}
              onChange={handleChange}
              placeholder="Example@anyemail.com"
              className="border rounded-md w-full p-2 pl-10 mt-1 focus:outline-none focus:ring focus:border-blue-300 text-base"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block text-base font-bold">
            Phone Number<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <img
              src={Icon1}
              alt="Logo"
              className="absolute h-5 w-5 left-3 top-4"
            />
            <input
              type="tel"
              name="phone"
              
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 8800688763"
              className="border rounded-md w-full p-2 pl-10 mt-1 focus:outline-none focus:ring focus:border-blue-300 text-base"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="address" className="block text-base font-bold">
            Address<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <img
              src={Icon5}
              alt="Logo"
              className="absolute h-5 w-5 left-3 top-4"
            />
            <input
              type="text"
              name="address"
              
              value={formData.address}
              onChange={handleChange}
              placeholder="Gugurgram ,India"
              className="border rounded-md w-full p-2 pl-10 mt-1 focus:outline-none focus:ring focus:border-blue-300 text-base"
              required
            />
          </div>
        </div>
         <div style={{ height: '40vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        
      </GoogleMapReact>
    </div>
        <div>
          <label htmlFor="saleValue" className="block text-base font-bold">
            Sale Value
          </label>
          <div className="relative">
            <img
              src={Icon9}
              alt="Logo"
              className="absolute h-5 w-5 left-3 top-4"
            />
          <input
            type="number"
            name="saleValue"
            
            value={formData.saleValue}
            onChange={handleChange}
            placeholder="50,00,000"
            className="border rounded-md w-full p-2 pl-10 mt-1 focus:outline-none focus:ring focus:border-blue-300 text-base"
          />
            </div>
        </div>
        <div>
          <label htmlFor="date" className="block text-base font-bold">
            Date
          </label>
          <div className="relative">
            <img
              src={Icon3}
              alt="Logo"
              className="absolute h-5 w-5 left-3 top-4 z-10"
            />
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd MMMM yyyy"
        placeholderText='29 August 2023'
        customInput={customInput}
        className="border rounded-md w-full p-2 pl-10 mt-1 focus:outline-none focus:ring focus:border-blue-300"
      />
          <div>
    </div>
            </div>
        </div>
        <div>
          <label htmlFor="time" className="block text-base font-bold">
            Time
          </label>
          <div className="relative" >
            <img
              src={Icon6}
              alt="Logo"
              className="absolute h-5 w-5 left-3 top-4 z-10"
            />
            
          <TimePicker onChange={onChange} value={value} format="HH:mm a" className="!w-full !p-2 !pl-10 !mt-1" disableClock={true} clockIcon={false} clearIcon ={false} hourPlaceholder="20" minutePlaceholder ="21"/>
                

            </div>
        </div>
        <div>
          <label htmlFor="options" className="block text-base font-bold">
            Options
          </label>
          <div className="relative">
            <img
              src={Icon8}
              alt="Logo"
              className="absolute h-5 w-5 left-3 top-4"
            />
          <select name="cars" id="cars" className="border rounded-md w-full p-2 pl-10 mt-1 focus:outline-none focus:ring focus:border-blue-300 text-base" defaultValue={0} >
      <option value="0">Select Options</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>
            </div>
        </div>
        <div>
          <label htmlFor="products" className="block text-base font-bold">
            Products
          </label>
          <div className="relative">
            <img
              src={Icon7}
              alt="Logo"
              className="absolute h-5 w-5 left-3 top-4"
            />
          <select name="cars" id="cars" className="border rounded-md w-full p-2 pl-10 mt-1 focus:outline-none focus:ring focus:border-blue-300 text-base" defaultValue={0}>
      <option value="0" ></option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>
            </div>
        </div>
       <div className='pt-5'>
  <label htmlFor="note" className="block text-base font-bold">
    Note<span className="text-red-500">*</span>
  </label>
  <div className="relative">
    <textarea
      name="address"
      row="10"
      
      cols="50"
      value={formData.address}
      onChange={handleChange}
      placeholder="Enter note"
      className="border rounded-md w-full resize-none p-2 pl-10 mt-1 focus:outline-none focus:ring focus:border-blue-300 text-base"
      required
    />
  </div>
</div>
        <div className="w-full">
          <button type="submit" className="mt-24 bg-blue-900 hover:bg-blue-700 text-white font-bold py-3 px-4 mb-4 w-full rounded">
            Add Lead
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
