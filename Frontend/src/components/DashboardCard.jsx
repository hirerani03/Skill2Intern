import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardCard = ({ userId }) => {
   const [internships, setInternships] = useState([]);

    useEffect(() => {

        axios
            .get(`http://localhost:8080/internships/recommended/${userId}`)
            .then((response) => {
                setInternships(response.data);
            })
            .catch((error) => {
                console.error("Error fetching recommended internships:", error);
            });

    }, [userId]);

  return (
    <div className="dashboard">
      <h2>Recommended Internships</h2>

            {internships.length === 0 ? (
                <p>No internships found based on your skills.</p>
            ) : (

                <div className="internship-list">

                    {internships.map((internship) => (

                        <div
                            className="internship-card"
                            key={internship.internshipId}
                        >

                            <h3>{internship.title}</h3>

                            <p>
                                <strong>Company:</strong>{" "}
                                {internship.company?.companyName}
                            </p>

                            <p>
                                <strong>Location:</strong>{" "}
                                {internship.location}
                            </p>

                            <p>
                                <strong>Type:</strong>{" "}
                                {internship.internshipType}
                            </p>

                            <p>
                                <strong>Duration:</strong>{" "}
                                {internship.duration}
                            </p>

                            <p>
                                <strong>Stipend:</strong>{" "}
                                {internship.stipend}
                            </p>

                            <p>
                                <strong>Apply Before:</strong>{" "}
                                {internship.applicationDeadline}
                            </p>

                        </div>

                    ))}

                </div>

            )}

    </div>
  )
}

export default DashboardCard
