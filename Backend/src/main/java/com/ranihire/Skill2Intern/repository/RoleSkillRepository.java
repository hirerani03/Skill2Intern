package com.ranihire.Skill2Intern.repository;


import com.ranihire.Skill2Intern.model.RoleSkill;
import com.ranihire.Skill2Intern.model.RoleSkillId;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RoleSkillRepository extends JpaRepository<RoleSkill, RoleSkillId> {
}
