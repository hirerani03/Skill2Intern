package com.ranihire.Skill2Intern.model;

import jakarta.persistence.*;

@Entity
@Table(name = "role_skill")
@IdClass(RoleSkillId.class)
public class RoleSkill {
    @Id
    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

    @Id
    @ManyToOne
    @JoinColumn(name = "skill_id")
    private Skill skill;

    public RoleSkill() {
    }

    public RoleSkill(Role role, Skill skill) {
        this.role = role;
        this.skill = skill;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Skill getSkill() {
        return skill;
    }

    public void setSkill(Skill skill) {
        this.skill = skill;
    }
}
