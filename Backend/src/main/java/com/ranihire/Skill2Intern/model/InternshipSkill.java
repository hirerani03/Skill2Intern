package com.ranihire.Skill2Intern.model;

import jakarta.persistence.*;

@Entity
@Table(name = "internship_skill")
@IdClass(InternshipSkillId.class)
public class InternshipSkill {
    @Id
    @ManyToOne
    @JoinColumn(name = "internship_id")
    private Internship internship;

    @Id
    @ManyToOne
    @JoinColumn(name = "skill_id")
    private Skill skill;

    public InternshipSkill() {
    }

    public InternshipSkill(Internship internship, Skill skill) {
        this.internship = internship;
        this.skill = skill;
    }

    public Internship getInternship() {
        return internship;
    }

    public void setInternship(Internship internship) {
        this.internship = internship;
    }

    public Skill getSkill() {
        return skill;
    }

    public void setSkill(Skill skill) {
        this.skill = skill;
    }
}
