import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
                console.error(
                    "Error fetching internship details:",
                    error
                );

                setError("Unable to load internship details.");
                setLoading(false);
            });
    }, [internshipId]);

    if (loading) {
        return <p>Loading internship details...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!internship) {
        return <p>Internship not found.</p>;
    }

    return (
        <div className="internship-details-container">

            {/* =========================================
                INTERNSHIP HEADER
            ========================================= */}

            <div className="internship-details-header">

                {/* ---------- TOP SECTION ---------- */}

                <div className="internship-top-section">

                    {/* LEFT : Logo + Internship Information */}

                    <div className="internship-title-section">

                        <img
                            src={internship.company.logoUrl}
                            alt={internship.company.companyName}
                            className="details-company-logo"
                        />

                        <div className="internship-title-info">

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


                    {/* RIGHT : Skill Match */}

                    <div className="skill-match-section">

                        <span>
                            Skill Match
                        </span>

                        <strong>
                            82%
                        </strong>

                    </div>

                </div>


                {/* ---------- FIRST INFORMATION ROW ---------- */}

                <div className="internship-info-row">

                    {/* Location */}

                    <div className="internship-info-item">

                        <span className="info-icon">
                            📍
                        </span>

                        <div>
                            <span className="info-label">
                                Location
                            </span>

                            <p>
                                {internship.location}
                            </p>
                        </div>

                    </div>


                    {/* Internship Type */}

                    <div className="internship-info-item">

                        <span className="info-icon">
                            💼
                        </span>

                        <div>
                            <span className="info-label">
                                Internship Type
                            </span>

                            <p>
                                {internship.internshipType}
                            </p>
                        </div>

                    </div>


                    {/* Duration */}

                    <div className="internship-info-item">

                        <span className="info-icon">
                            🕒
                        </span>

                        <div>
                            <span className="info-label">
                                Duration
                            </span>

                            <p>
                                {internship.duration}
                            </p>
                        </div>

                    </div>

                </div>


                {/* ---------- SECOND INFORMATION ROW ---------- */}

                <div className="internship-info-row second-row">

                    {/* Stipend */}

                    <div className="internship-info-item">

                        <span className="info-icon">
                            💰
                        </span>

                        <div>
                            <span className="info-label">
                                Stipend
                            </span>

                            <p>
                                {internship.stipend}
                            </p>
                        </div>

                    </div>


                    {/* Openings */}

                    <div className="internship-info-item">

                        <span className="info-icon">
                            👥
                        </span>

                        <div>
                            <span className="info-label">
                                Openings
                            </span>

                            <p>
                                {internship.openings}
                            </p>
                        </div>

                    </div>


                    {/* Application Deadline */}

                    <div className="internship-info-item">

                        <span className="info-icon">
                            📅
                        </span>

                        <div>
                            <span className="info-label">
                                Apply Before
                            </span>

                            <p>
                                {internship.applicationDeadline}
                            </p>
                        </div>

                    </div>

                </div>


                {/* ---------- ACTION BUTTONS ---------- */}

                <div className="internship-action-section">

                    <button className="apply-button">
                        Apply Now
                    </button>

                    <button className="save-button">
                        Save
                    </button>

                </div>

            </div>


            {/* =========================================
                BELOW SECTIONS - NEXT STEP
            ========================================= */}

            {/*
            <div className="internship-content">

                About Internship

                Your Preparation

                Company Details

            </div>
            */}

        </div>
    );
};

export default InternshipDetails;