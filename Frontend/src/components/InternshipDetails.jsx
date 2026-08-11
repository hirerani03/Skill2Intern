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
            INTERNSHIP CONTENT
        ========================================= */}

        <div className="internship-content">

            {/* =====================================
                LEFT : INTERNSHIP & COMPANY DETAILS
            ===================================== */}

            <div className="internship-details-column">

                <div className="content-section">

                    <h2>Internship & Company Details</h2>

                    {/* About Internship */}
                    <section className="detail-block">
                        <h3>About the Internship</h3>
                        <p>
                            {internship.description}
                        </p>
                    </section>


                    {/* About Role */}
                    <section className="detail-block">
                        <h3>About the Role</h3>
                        <p>
                            {internship.role.roleName}
                        </p>
                    </section>


                    {/* Responsibilities */}
                    <section className="detail-block">
                        <h3>Responsibilities</h3>
                        <p>
                            {internship.responsibilities}
                        </p>
                    </section>


                    {/* Skills Required */}
                    <section className="detail-block">
                        <h3>Skills Required</h3>
                        <p>
                            {internship.eligibility}
                        </p>
                    </section>


                    {/* Eligibility */}
                    <section className="detail-block">
                        <h3>Eligibility Criteria</h3>
                        <p>
                            {internship.eligibility}
                        </p>
                    </section>


                    {/* Selection Process */}
                    <section className="detail-block">
                        <h3>Selection Process</h3>
                        <p>
                            {internship.recruitmentProcess}
                        </p>
                    </section>


                    {/* Internship Details */}
                    <section className="detail-block">

                        <h3>Internship Details</h3>

                        <div className="internship-detail-grid">

                            <div>
                                <span>Internship Type</span>
                                <strong>
                                    {internship.internshipType}
                                </strong>
                            </div>

                            <div>
                                <span>Location</span>
                                <strong>
                                    {internship.location}
                                </strong>
                            </div>

                            <div>
                                <span>Duration</span>
                                <strong>
                                    {internship.duration}
                                </strong>
                            </div>

                            <div>
                                <span>Stipend</span>
                                <strong>
                                    {internship.stipend}
                                </strong>
                            </div>

                            <div>
                                <span>Openings</span>
                                <strong>
                                    {internship.openings}
                                </strong>
                            </div>

                            <div>
                                <span>Deadline</span>
                                <strong>
                                    {internship.applicationDeadline}
                                </strong>
                            </div>

                        </div>

                    </section>


                    {/* About Company */}
                    <section className="detail-block">

                        <h3>About Company</h3>

                        <h4>
                            {internship.company.companyName}
                        </h4>

                        <p>
                            {internship.company.about}
                        </p>

                        <div className="company-info-list">

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
                                <a
                                    href={internship.company.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit Company Website
                                </a>
                            </p>

                        </div>

                    </section>


                    {/* Application Information */}
                    <section className="detail-block">

                        <h3>Application Information</h3>

                        <p>
                            Apply for this internship before{" "}
                            <strong>
                                {internship.applicationDeadline}
                            </strong>.
                        </p>

                    </section>


                    {/* Important Dates */}
                    <section className="detail-block">

                        <h3>Important Dates</h3>

                        <div className="important-dates">

                            <div>
                                <span>Posted</span>

                                <strong>
                                    {new Date(
                                        internship.postedDate
                                    ).toLocaleDateString()}
                                </strong>
                            </div>

                            <div>
                                <span>Application Deadline</span>

                                <strong>
                                    {internship.applicationDeadline}
                                </strong>
                            </div>

                        </div>

                    </section>

                </div>

            </div>


            {/* =====================================
                RIGHT : YOUR PREPARATION
            ===================================== */}

            <div className="preparation-column">

                <div className="content-section preparation-section">

                    <h2>Your Preparation</h2>


                    {/* Your Skill Match */}
                    <section className="preparation-block">

                        <h3>🎯 Your Skill Match</h3>

                        <div className="preparation-match">
                            <strong>82% Match</strong>

                            <div className="match-progress">
                                <div
                                    className="match-progress-fill"
                                    style={{ width: "82%" }}
                                ></div>
                            </div>
                        </div>

                    </section>


                    {/* Skills You Have */}
                    <section className="preparation-block">

                        <h3>✅ Skills You Have</h3>

                        <div className="skill-list">

                            <span>Java</span>
                            <span>Spring Boot</span>
                            <span>MySQL</span>
                            <span>Git</span>

                        </div>

                    </section>


                    {/* Missing Skills */}
                    <section className="preparation-block">

                        <h3>❌ Skills You're Missing</h3>

                        <div className="skill-list missing-skills">

                            <span>Docker</span>
                            <span>AWS</span>

                        </div>

                    </section>


                    {/* Skills Gap */}
                    <section className="preparation-block">

                        <h3>🧩 Skills Gap</h3>

                        <div className="skill-gap-item">

                            <strong>Docker</strong>

                            <p>
                                Containerization, Docker Images,
                                Containers and Docker Compose.
                            </p>

                            <span>
                                Recommended: Docker Basics → Images
                                → Containers → Docker Compose
                            </span>

                        </div>


                        <div className="skill-gap-item">

                            <strong>AWS</strong>

                            <p>
                                Cloud fundamentals and deployment
                                concepts.
                            </p>

                            <span>
                                Recommended: AWS Basics → EC2 →
                                S3 → Deployment
                            </span>

                        </div>

                    </section>


                    {/* Preparation */}
                    <section className="preparation-block">

                        <h3>📚 Preparation</h3>

                        <div className="preparation-item">
                            <span>Java</span>
                            <strong className="ready">
                                Ready
                            </strong>
                        </div>

                        <div className="preparation-item">
                            <span>Spring Boot</span>
                            <strong className="revise">
                                Revise
                            </strong>
                        </div>

                        <div className="preparation-item">
                            <span>MySQL</span>
                            <strong className="practice">
                                Practice
                            </strong>
                        </div>

                        <div className="preparation-item">
                            <span>Docker</span>
                            <strong className="learn">
                                Learn
                            </strong>
                        </div>

                    </section>


                    {/* Learning Roadmap */}
                    <section className="preparation-block">

                        <h3>🗺 Learning Roadmap</h3>

                        <div className="learning-roadmap">

                            <span>Java</span>
                            <span>→</span>
                            <span>Spring Boot</span>
                            <span>→</span>
                            <span>REST</span>
                            <span>→</span>
                            <span>MySQL</span>
                            <span>→</span>
                            <span>Docker</span>

                        </div>

                    </section>


                    {/* Interview Preparation */}
                    <section className="preparation-block">

                        <h3>🎤 Interview Preparation</h3>

                        <p>Technical Questions</p>

                        <p>HR Questions</p>

                    </section>

                </div>

            </div>

        </div>  

        </div>
    );
};

export default InternshipDetails;