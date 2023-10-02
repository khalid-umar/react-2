// Complete the HomePage Component and export it

function HomePage() {
  return (
    <div className="Homepage">
      <h1>Home Page</h1>
    <h3>Login Page</h3>
    </div>
  );
}

import React from 'react';
import Form from './Form'; // Import the Form component

function HomePage() {
  return (
    <div className="Homepage">
      <h1>Home Page</h1>
      <Form /> {/* Render the Form component here */}
    </div>
  );
}

export default HomePage;
