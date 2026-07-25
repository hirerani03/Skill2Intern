package com.ranihire.Skill2Intern.model;

import java.util.Objects;

public class RoleSkillId {
    private Integer role;
    private Integer skill;

    public RoleSkillId() {
    }

    public RoleSkillId(Integer role, Integer skill) {
        this.role = role;
        this.skill = skill;
    }

    public Integer getRole() {
        return role;
    }

    public void setRole(Integer role) {
        this.role = role;
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
        if (!(o instanceof RoleSkillId)) return false;

        RoleSkillId that = (RoleSkillId) o;

        return Objects.equals(role, that.role)
                && Objects.equals(skill, that.skill);
    }

    @Override
    public int hashCode() {
        return Objects.hash(role, skill);
    }
}
