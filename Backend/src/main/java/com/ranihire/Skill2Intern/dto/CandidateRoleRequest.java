package com.ranihire.Skill2Intern.dto;

import java.util.List;

public class CandidateRoleRequest {
    private Integer candidateId;
    private List<Integer> roleIds;

    public CandidateRoleRequest() {
    }

    public Integer getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(Integer candidateId) {
        this.candidateId = candidateId;
    }

    public List<Integer> getRoleIds() {
        return roleIds;
    }

    public void setRoleIds(List<Integer> roleIds) {
        this.roleIds = roleIds;
    }
}
