package com.ranihire.Skill2Intern.model;

import jakarta.persistence.*;

@Entity
@Table(name = "candidate_skill")
@IdClass(CandidateSkillId.class)
public class CandidateSkill {
    @Id
    @ManyToOne
    @JoinColumn(name = "candidate_id")
    private CandidateProfile candidateProfile;

    @Id
    @ManyToOne
    @JoinColumn(name = "skill_id")
    private Skill skill;

    public CandidateSkill() {
    }

    public CandidateSkill(CandidateProfile candidateProfile, Skill skill) {
        this.candidateProfile = candidateProfile;
        this.skill = skill;
    }

    public CandidateProfile getCandidateProfile() {
        return candidateProfile;
    }

    public void setCandidateProfile(CandidateProfile candidateProfile) {
        this.candidateProfile = candidateProfile;
    }

    public Skill getSkill() {
        return skill;
    }

    public void setSkill(Skill skill) {
        this.skill = skill;
    }
}
