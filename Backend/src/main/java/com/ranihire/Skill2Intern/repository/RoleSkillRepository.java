package com.ranihire.Skill2Intern.repository;


import com.ranihire.Skill2Intern.model.Role;
import com.ranihire.Skill2Intern.model.RoleSkill;
import com.ranihire.Skill2Intern.model.RoleSkillId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface RoleSkillRepository extends JpaRepository<RoleSkill, RoleSkillId> {
    @Query("""
       SELECT DISTINCT rs.role
       FROM RoleSkill rs
       WHERE rs.skill.skillId IN :skillIds
       """)
    List<Role> findRecommendedRoles(@Param("skillIds") List<Integer> skillIds);
}
