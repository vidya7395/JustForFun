import React, { useState } from 'react';
import './App.css';

const employees = [
  "John Doe",
  "Jane Smith",
  "Alice Johnson",
  "Robert Brown",
  "Emily Davis",
  "Michael Wilson",
  "Sarah Miller",
  "David Moore",
  "Laura Taylor",
  "James Anderson"
];

function App() {
  const [remainingEmployees, setRemainingEmployees] = useState(employees);
  const [currentEmployee, setCurrentEmployee] = useState("");

  const handleClick = () => {
    if (remainingEmployees.length === 0) {
      alert("No more employees");
      return;
    }
    const randomIndex = Math.floor(Math.random() * remainingEmployees.length);
    const newEmployee = remainingEmployees[randomIndex];
    setCurrentEmployee(newEmployee);
    setRemainingEmployees(remainingEmployees.filter((_, index) => index !== randomIndex));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee List</h1>
        <button onClick={handleClick}>Get New Employee</button>
        {currentEmployee && <p>New Employee: {currentEmployee}</p>}
      </header>
    </div>
  );
}

export default App;
