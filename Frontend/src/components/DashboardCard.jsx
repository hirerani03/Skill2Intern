import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardCard = ({ userId }) => {
   const [internships, setInternships] = useState([]);

    const getTimeAgo = (postedDate) => {
    const posted = new Date(postedDate);
    const now = new Date();

    const diffInSeconds = Math.floor((now - posted) / 1000);

    if (diffInSeconds < 60) {
        return "Just now";
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);

    if (diffInMinutes < 60) {
        return `${diffInMinutes} ${diffInMinutes === 1 ? "minute" : "minutes"} ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);

    if (diffInHours < 24) {
        return `${diffInHours} ${diffInHours === 1 ? "hour" : "hours"} ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays < 30) {
        return `${diffInDays} ${diffInDays === 1 ? "day" : "days"} ago`;
    }

    const diffInMonths = Math.floor(diffInDays / 30);

    return `${diffInMonths} ${diffInMonths === 1 ? "month" : "months"} ago`;
};

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

            {internships.map((recommended) => {

                const internship = recommended.internship;

                return (
                    <div key={internship.internshipId}>

                        <h3>{internship.title}</h3>

                        <p>
                           {internship.company.companyName}
                        </p>

                        <img
                            src={internship.company.logoUrl}
                            alt={internship.company.companyName}
                        />

                        <p>
                            📍 {internship.location}
                        </p>

                        <p>
                            💰 {internship.stipend}
                        </p>

                        <p>
                            🕒 {internship.duration}
                        </p>

                         <p>
                            Skill Match: {recommended.skillMatchPercentage}%
                        </p>
                        <p>
                            Apply Before: {internship.applicationDeadline}
                        </p>

                        <p>
                            🕒 {getTimeAgo(internship.postedDate)}
                        </p>

                    </div>
                );
            })}

    </div>
  )
}

export default DashboardCard
