import React from 'react'
import { useParams } from "react-router-dom";
const InternshipDetails = () => {
    const { internshipId } = useParams();
  return (
    <div>
      <h2>Internship Details</h2> 
      <p>Internship ID: {internshipId}</p>
    </div>
  )
}

export default InternshipDetails
