package com.ranihire.Skill2Intern.dto;

import java.util.List;

public class CandidateSkillRequest {
    private Integer candidateId;
    private List<Integer> skillIds;

    public CandidateSkillRequest() {
    }

    public Integer getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(Integer candidateId) {
        this.candidateId = candidateId;
    }

    public List<Integer> getSkillIds() {
        return skillIds;
    }

    public void setSkillIds(List<Integer> skillIds) {
        this.skillIds = skillIds;
    }
}
