import { React, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState("");
  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `/student/login?registrationNumber=${formData}`, // ✅ RequestParam format
        null, // No request body
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" }, // ✅ Updated headers
        }
      );
      alert(response.data.message);
      console.log("Login Successful: " + JSON.stringify(response.data));
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Error: " + (error.response?.data || "Invalid request"));
    }
  };

  return (
    <div className="container">
      <form className="form-box" action="" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="input-group">
          <label>Reg.no</label>
          <input
            type="text"
            placeholder="Enter Reg. No"
            onChange={handleChange}
            required
          />
        </div>
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
};
// done something
export default App;
