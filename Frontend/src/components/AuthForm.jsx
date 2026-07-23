import React, { useState } from 'react'
import axios from "axios";
import '../App.css'
import { ToastContainer, toast } from "react-toastify"; 
import CandidateDetailsForm from './CandidateDetailsForm';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showCandidateForm, setShowCandidateForm] = useState();
  const [userId, setUserId] = useState(null);

  const handleSignup = async () => {
    const user = {
      userName: userName,
      password: password
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/signup",
        user
      );

      setUserId(response.data.userId);
      toast.success("Signup Successful!");
      

      setUserName("");
      setPassword("");
      setShowCandidateForm(true);

    } catch (error) {
      toast.error("Signup Failed!");
      console.error(error);
    }
  };

  const handleLogin = async () => {
      const user = {
          userName,
          password,
      };
      try {
        const response = await axios.post(
            "http://localhost:8080/login",
            user
        );

        // console.log(response.data);

        if (response.data === "Login Successful") {
          toast.success("Login Successful!");
          setUserName("");
          setPassword("");

          console.log("Navigate to Dashboard");
        }
        else if (response.data === "Invalid Password") {
          toast.warning("Invalid Password!");
        } else if (response.data === "User not found") {
          toast.error("User not found!");
        }

      } catch (error) {
          console.error(error);
      }
  };
  
  if (showCandidateForm) {
    return <CandidateDetailsForm userId={userId} />;
  }
  return (
    <div className='container'>
      <div className='form-container'>
        <div className='form-toggle'>
            <button className={isLogin ? "active":""} onClick={()=> setIsLogin(true)}>Login</button>
            <button className={!isLogin ? "active":""} onClick={()=> setIsLogin(false)}>SignUp</button>
        </div>

        {isLogin ? 
          <>
          <div className='form'>
            <input 
              type="text" 
              placeholder='UserName'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input 
              type="password" 
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}  
            />
            <button onClick={handleLogin}>Login</button>
            <div className='auth-footer'>
              <p>Not Registered yet?</p>
              <a href="#" onClick={(e) => {
                  e.preventDefault();
                  setIsLogin(false);
                }}>Signup
              </a>
            </div>
          </div>
          </>:
          <>
          <div className='form'>
            <input 
              type="text" 
              placeholder='UserName' 
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input 
              type="password" 
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}  
            />
            <button onClick={handleSignup}>SignUp</button>
            <div className='auth-footer'>
              <p>Already Registered?</p>
              <a href="#" onClick={(e) => {
                  e.preventDefault();
                  setIsLogin(true);
                }}>Login
              </a>
            </div>
          </div>
          </>
        }

      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </div>
    
  )
}

export default AuthForm
