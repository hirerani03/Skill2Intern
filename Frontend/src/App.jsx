import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm"
import InternshipDetails from "./components/InternshipDetails";
import './App.css'

function App() {    
  return (
    <BrowserRouter> 
      <Routes> 
        <Route 
          path="/" 
          element={<AuthForm />} 
        />

        <Route 
          path="/internship/:internshipId" 
          element={<InternshipDetails />} 
        /> 
      </Routes> 
    </BrowserRouter>
  )
}

export default App
