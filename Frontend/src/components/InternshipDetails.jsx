import React from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';

const InternshipDetails = () => {
    const { internshipId } = useParams();

    const [internship, setInternship] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState("");

    useEffect(() => { 
      axios 
        .get(`http://localhost:8080/internships/${internshipId}`) 
        .then((response) => { 
          setInternship(response.data); 
          setLoading(false); 
        }) 
          .catch((error) => { 
            console.error("Error fetching internship details:", error); 
            setError("Unable to load internship details."); 
            setLoading(false); 
          }); 
        }, [internshipId]); 
        
        if (loading) { 
          return <p>Loading internship details...</p>; 
        } if (error) { return <p>{error}</p>; } 
        
        if (!internship) { 
          return <p>Internship not found.</p>; 
        }

  return (
    <div className="internship-details-container">
      {/* Internship Header */} 
      <div className="internship-details-header"> 
        <div className="company-header"> 
          <img 
            src={internship.company.logoUrl} 
            alt={internship.company.companyName} 
            className="company-logo" 
          /> 

          <div> 
            <h1>
              {internship.title}
            </h1>

            <h3> 
              {internship.company.companyName} 
            </h3>

            <p> 
              {internship.role.roleName} 
            </p>

          </div> 
        </div>     
      </div> 

      {/* Internship Basic Information */} 
      <div className="internship-basic-info"> 
        <div> 
          <strong>Location</strong> 
          <p>📍 {internship.location}</p> 
        </div> 

        <div> 
          <strong>Internship Type</strong> 
          <p>{internship.internshipType}</p> 
        </div> 
        
        <div> 
          <strong>Duration</strong> 
          <p>{internship.duration}</p> 
        </div> 
        
        <div> 
          <strong>Stipend</strong> 
          <p>{internship.stipend}</p> 
        </div> 
        
        <div> 
          <strong>Openings</strong> 
          <p>{internship.openings}</p> 
        </div> 
        
        <div> 
          <strong>Application Deadline</strong>
          <p>{internship.applicationDeadline}</p> 
        </div> 
      </div> 

      {/* About Internship */} 
      <section className="details-section"> 
        <h2>About the Internship</h2> 
        <p> 
          {internship.description} 
        </p> 
      </section> 
      
      {/* Responsibilities */} 
      <section className="details-section"> 
        <h2>What You'll Do</h2> 
        <p> {internship.responsibilities} </p> 
      </section> 
      
      {/* Eligibility */} 
      <section className="details-section"> 
        <h2>Eligibility Criteria</h2> 
        <p> {internship.eligibility} </p> 
      </section> 
      
      {/* Recruitment Process */} 
      <section className="details-section"> 
        <h2>Selection Process</h2> 
        <p> {internship.recruitmentProcess} </p> 
      </section> 
      
      {/* Company Information */} 
      <section className="company-details-section"> 
        <h2>About the Company</h2> 
        <h3> {internship.company.companyName} </h3> 
        <p> {internship.company.about} </p> 
        <p> 
          <strong>Industry:</strong>{" "} 
          {internship.company.industry} 
        </p> 
        
        <p> 
          <strong>Company Size:</strong>{" "} 
          {internship.company.companySize} 
        </p> 
        
        <p> 
          <strong>Location:</strong>{" "} 
          {internship.company.location} 
        </p> 
        
        <p> 
          <strong>Website:</strong>{" "} 
          <a href={internship.company.website} target="_blank" rel="noopener noreferrer" > Visit Company Website </a> 
        </p> 

      </section> 
      
      {/* Additional Information */} 
      <section className="details-section"> 
        <p> <strong>Posted:</strong>{" "} 
          {new Date(internship.postedDate).toLocaleDateString()} 
        </p> 
        
        <p> 
          <strong>Status:</strong>{" "} {internship.status} 
        </p> 
      </section>

    </div>
  )
}

export default InternshipDetails
