package com.ranihire.Skill2Intern.model;

import java.io.Serializable;
import java.util.Objects;

public class CandidateRoleId implements Serializable {
    private Integer candidateProfile;
    private Integer role;

    public CandidateRoleId() {
    }

    public CandidateRoleId(Integer candidateProfile, Integer role) {
        this.candidateProfile = candidateProfile;
        this.role = role;
    }

    public Integer getCandidateProfile() {
        return candidateProfile;
    }

    public void setCandidateProfile(Integer candidateProfile) {
        this.candidateProfile = candidateProfile;
    }

    public Integer getRole() {
        return role;
    }

    public void setRole(Integer role) {
        this.role = role;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CandidateRoleId)) return false;

        CandidateRoleId that = (CandidateRoleId) o;

        return Objects.equals(candidateProfile, that.candidateProfile)
                && Objects.equals(role, that.role);
    }

    @Override
    public int hashCode() {
        return Objects.hash(candidateProfile, role);
    }
}
