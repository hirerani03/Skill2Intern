package com.ranihire.Skill2Intern.model;
import jakarta.persistence.*;

@Entity
@Table(name = "candidate_profile")
public class CandidateProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int candidateId;
    private String name;
    private String email;
    private String mobile;
    private String gender;
    private String degree;
    private String branch;
    private int passoutYear;
    private double cgpa;
    private String experienceType;
    private String college;
    private String githubUrl;
    private String linkedinUrl;

    private String portfolioUrl;
    @Column(columnDefinition = "TEXT")
    private String bio;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    public CandidateProfile() {
    }

    public CandidateProfile(int candidateId, String name, String mobile,
                            String email, String gender, String degree,
                            String branch, int passoutYear, double cgpa,
                            String experienceType, String college,
                            String githubUrl, String linkedinUrl, String portfolioUrl,
                            String bio, User user) {
        this.candidateId = candidateId;
        this.name = name;
        this.mobile = mobile;
        this.email = email;
        this.gender = gender;
        this.degree = degree;
        this.branch = branch;
        this.passoutYear = passoutYear;
        this.cgpa = cgpa;
        this.experienceType = experienceType;
        this.college = college;
        this.githubUrl = githubUrl;
        this.linkedinUrl = linkedinUrl;
        this.portfolioUrl = portfolioUrl;
        this.bio = bio;
        this.user = user;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(int candidateId) {
        this.candidateId = candidateId;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public int getPassoutYear() {
        return passoutYear;
    }

    public void setPassoutYear(int passoutYear) {
        this.passoutYear = passoutYear;
    }

    public double getCgpa() {
        return cgpa;
    }

    public void setCgpa(double cgpa) {
        this.cgpa = cgpa;
    }

    public String getExperienceType() {
        return experienceType;
    }

    public void setExperienceType(String experienceType) {
        this.experienceType = experienceType;
    }

    public String getCollege() {
        return college;
    }

    public void setCollege(String college) {
        this.college = college;
    }

    public String getGithubUrl() {
        return githubUrl;
    }

    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }

    public String getLinkedinUrl() {
        return linkedinUrl;
    }

    public void setLinkedinUrl(String linkedinUrl) {
        this.linkedinUrl = linkedinUrl;
    }

    public String getPortfolioUrl() {
        return portfolioUrl;
    }

    public void setPortfolioUrl(String portfolioUrl) {
        this.portfolioUrl = portfolioUrl;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
