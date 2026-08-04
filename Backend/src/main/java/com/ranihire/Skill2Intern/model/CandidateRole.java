package com.ranihire.Skill2Intern.model;

import jakarta.persistence.*;

@Entity
@Table(name = "candidate_role")
@IdClass(CandidateRoleId.class)
public class CandidateRole {
    @Id
    @ManyToOne
    @JoinColumn(name = "candidate_id")
    private CandidateProfile candidateProfile;

    @Id
    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

    public CandidateRole() {
    }

    public CandidateRole(CandidateProfile candidateProfile, Role role) {
        this.candidateProfile = candidateProfile;
        this.role = role;
    }

    public CandidateProfile getCandidateProfile() {
        return candidateProfile;
    }

    public void setCandidateProfile(CandidateProfile candidateProfile) {
        this.candidateProfile = candidateProfile;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
