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
    <div>
      <h2>Recommended Internships</h2>

            {internships.map((internship) => (
                <div key={internship.internshipId}>

                    <h3>{internship.title}</h3>

                    <p>
                        Company: {internship.company.companyName}
                    </p>

                    <img
                        src={internship.company.logoUrl}
                        alt={internship.company.companyName}
                    />
                    <p>
                        Location: {internship.location}
                    </p>

                    <p>
                        Stipend: {internship.stipend}
                    </p>

                    <p>
                        Duration: {internship.duration}
                    </p>

                    <p>
                        Apply Before: {internship.applicationDeadline}
                    </p>

                    <p>
                        Posted Date: {internship.postedDate}
                    </p>

                </div>
            ))}

    </div>
  )
}

export default DashboardCard
