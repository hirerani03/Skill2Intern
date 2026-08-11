import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../App.css'
const DashboardCard = ({ candidateId  }) => {
    const navigate = useNavigate();
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
            return `${diffInMinutes} ${
                diffInMinutes === 1 ? "minute" : "minutes"
            } ago`;
        }

        const diffInHours = Math.floor(diffInMinutes / 60);

        if (diffInHours < 24) {
            return `${diffInHours} ${
                diffInHours === 1 ? "hour" : "hours"
            } ago`;
        }

        const diffInDays = Math.floor(diffInHours / 24);

        if (diffInDays < 30) {
            return `${diffInDays} ${
                diffInDays === 1 ? "day" : "days"
            } ago`;
        }

        const diffInMonths = Math.floor(diffInDays / 30);

        return `${diffInMonths} ${
            diffInMonths === 1 ? "month" : "months"
        } ago`;
    };

    useEffect(() => {
        axios
            .get(`http://localhost:8080/internships/recommended/${candidateId }`)
            .then((response) => {
                setInternships(response.data);
            })
            .catch((error) => {
                console.error(
                    "Error fetching recommended internships:",
                    error
                );
            });
    }, [candidateId ]);

    return (
        <div className="dashboard-container">

            <h2 className="dashboard-title">
                Recommended Internships
            </h2>

            <div className="internship-list">

                {internships.map((recommended) => {

                    const internship = recommended.internship;

                    return (
                        <div
                            className="internship-card"
                            key={internship.internshipId}
                            onClick={() =>
                                navigate(`/internship/${internship.internshipId}`)
                            }
                        >

                            {/* Top Section */}
                            <div className="internship-header">

                                <div className="company-info">

                                    <img
                                        className="company-logo"
                                        src={internship.company.logoUrl}
                                        alt={internship.company.companyName}
                                    />

                                    <div>
                                        <h3>
                                            {internship.title}
                                        </h3>

                                        <p className="company-name">
                                            {internship.company.companyName}
                                        </p>
                                    </div>

                                </div>

                                <span
                                    className={`skill-match ${
                                        recommended.skillMatchPercentage >= 80
                                            ? "high-match"
                                            : recommended.skillMatchPercentage >= 50
                                            ? "medium-match"
                                            : "low-match"
                                    }`}
                                >
                                    {recommended.skillMatchPercentage}% Match
                                </span>

                            </div>


                            {/* Internship Information */}
                            <div className="internship-info">

                                <span>
                                    📍 {internship.location}
                                </span>

                                <span>
                                    💰 {internship.stipend}
                                </span>

                                <span>
                                    🕒 {internship.duration}
                                </span>

                            </div>


                            {/* Bottom Section */}
                            <div className="internship-footer">

                                <span className="posted-time">
                                    📅 {getTimeAgo(internship.postedDate)}
                                </span>

                                <span className="deadline">
                                    Apply Before:{" "}
                                    {internship.applicationDeadline}
                                </span>

                            </div>

                        </div>
                    );
                })}

            </div>

        </div>
    );
};

export default DashboardCard;