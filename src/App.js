import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './App.css';

const employees = [
  "Aayushi Patel",
  "Abhishek Patel",
  "Afjal Shekhada",
  "Akshita Kapadia",
  "Aman Patel",
  "Amresh Prasad",
  "Anjali Tandel",
  "Ayush Dhimmar",
  "Ayushi Parmar",
  "Bhavik Gajdhar",
  "Bhumi Desai",
  "Brijesh Tailor",
  "Darsh Modi",
  "Hiren Tandel",
  "Jagdish Chaudhari",
  "Jigar Bhanushali",
  "Jinal Tandel",
  "Komal Bhavsar",
  "Mayur Patel",
  // "Mehul Patel",
  "Mihir Patel",
  "Mitul Patel",
  "Mrunal Patel",
  "Nikunj Patel",
  "Parth Patel",
  "Pooja Manvani",
  "Prachi Pandya",
  "Pratik Tandel",
  "Pritam Kushwaha",
  "Rahul Choksi",
  "Ravi Singh",
  "Revant Patel",
  "Ronak Patel",
  "Sheetal Patel",
  "Shivam Singh",
  "Sonal Patil",
  "Tanmay Patel",
  "Tanvi Patel",
  // "Vidya Satpute",
  "Vinay Chudasama",
  "Viral Patel",
  "Viral Patel",
  "Vishnu Tandel",
  "Vishwani Patel",
  "Yasin Hirani"
];

function App() {
  const [remainingEmployees, setRemainingEmployees] = useState(employees);
  const [currentEmployee, setCurrentEmployee] = useState("");
  const [loader, setLoader] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = () => {
    setLoader(true);
    setTimeout(() => {
      if (remainingEmployees.length === 0) {
        alert("No more employees");
        setLoader(false);
        return;
      }
      const randomIndex = Math.floor(Math.random() * remainingEmployees.length);
      const newEmployee = remainingEmployees[randomIndex];
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // Show confetti for 3 seconds
      setCurrentEmployee(newEmployee);
      setRemainingEmployees(remainingEmployees.filter((_, index) => index !== randomIndex));
      setLoader(false);
    
    }, 1000);
  };

  return (
    <div className="App">
      <header className="App-header">
        {loader ? <h1>Loading...</h1> : currentEmployee && <h1>{currentEmployee}</h1>}
        <button onClick={handleClick}>Get Name</button>
        {showConfetti && <Confetti />}
      </header>
    </div>
  );
}

export default App;
