package com.ranihire.Skill2Intern.model;

import java.util.Objects;

public class InternshipSkillId {
    private Integer internship;
    private Integer skill;

    public InternshipSkillId() {
    }

    public InternshipSkillId(Integer internship, Integer skill) {
        this.internship = internship;
        this.skill = skill;
    }

    public Integer getInternship() {
        return internship;
    }

    public void setInternship(Integer internship) {
        this.internship = internship;
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
        if (!(o instanceof InternshipSkillId)) return false;

        InternshipSkillId that = (InternshipSkillId) o;

        return Objects.equals(internship, that.internship)
                && Objects.equals(skill, that.skill);
    }

    @Override
    public int hashCode() {
        return Objects.hash(internship, skill);
    }
}
