# Form Component README

This component is a form designed to collect lead information. It includes various input fields for different details required from users.

## Features

- **Name:** Accepts text input for the user's name.
- **Email:** Accepts email input for the user's email address.
- **Phone Number:** Accepts phone number input in the format +91 8800688763.
- **Address:** Accepts text input for the user's address.
- **Sale Value:** Accepts numeric input for the sale value.
- **Date:** Allows the user to select a date using a date picker.
- **Time:** Allows the user to select a time using a time picker.
- **Options and Products:** Drop-down selects for additional information.
- **Note:** Accepts text input for any additional notes.

## Validations

- **Required Fields:** Name, email, phone number, address, and note are required fields.
- **Phone Number Format:** The phone number input follows the format +91 XXXXXXXXXX.

## External Dependencies

- `react-datepicker` for the date picker functionality.
- `react-time-picker` for the time picker functionality.
- `google-map-react` for displaying a map.

## Setup Instructions

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run dev`.

## Usage

Ensure the component is integrated into your React application correctly. Modify the props and styles as needed to fit your project requirements.
