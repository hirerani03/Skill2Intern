package com.ranihire.Skill2Intern.dto;

import com.ranihire.Skill2Intern.model.Internship;

public class RecommendedInternshipResponse {
    private Internship internship;
    private Integer skillMatchPercentage;

    public RecommendedInternshipResponse() {
    }

    public RecommendedInternshipResponse(
            Internship internship,
            Integer skillMatchPercentage) {

        this.internship = internship;
        this.skillMatchPercentage = skillMatchPercentage;
    }

    public Internship getInternship() {
        return internship;
    }

    public void setInternship(Internship internship) {
        this.internship = internship;
    }

    public Integer getSkillMatchPercentage() {
        return skillMatchPercentage;
    }

    public void setSkillMatchPercentage(Integer skillMatchPercentage) {
        this.skillMatchPercentage = skillMatchPercentage;
    }
}
