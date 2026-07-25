package com.ranihire.Skill2Intern.model;

import java.io.Serializable;
import java.util.Objects;

public class CandidateSkillId implements Serializable {
    private Integer candidateProfile;
    private Integer skill;

    public CandidateSkillId() {
    }

    public CandidateSkillId(Integer candidateProfile, Integer skill) {
        this.candidateProfile = candidateProfile;
        this.skill = skill;
    }

    public Integer getCandidateProfile() {
        return candidateProfile;
    }

    public void setCandidateProfile(Integer candidateProfile) {
        this.candidateProfile = candidateProfile;
    }

    public Integer getSkill() {
        return skill;
    }

    public void setSkill(Integer skill) {
        this.skill = skill;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CandidateSkillId)) return false;

        CandidateSkillId that = (CandidateSkillId) o;

        return Objects.equals(candidateProfile, that.candidateProfile)
                && Objects.equals(skill, that.skill);
    }

    @Override
    public int hashCode() {
        return Objects.hash(candidateProfile, skill);
    }
}
