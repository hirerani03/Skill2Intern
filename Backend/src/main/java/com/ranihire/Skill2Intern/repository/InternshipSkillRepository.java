package com.ranihire.Skill2Intern.repository;

import com.ranihire.Skill2Intern.model.Internship;
import com.ranihire.Skill2Intern.model.InternshipSkill;
import com.ranihire.Skill2Intern.model.InternshipSkillId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface InternshipSkillRepository  extends JpaRepository<InternshipSkill, InternshipSkillId> {
    @Query("""
       SELECT DISTINCT ins.internship
       FROM InternshipSkill ins
       WHERE ins.skill.skillId IN :skillIds
       """)
    List<Internship> findRecommendedInternships(@Param("skillIds") List<Integer> skillIds);

    @Query("""
           SELECT ins.skill.skillId
           FROM InternshipSkill ins
           WHERE ins.internship.internshipId = :internshipId
           """)
    List<Integer> findSkillIdsByInternshipId(
            @Param("internshipId") Integer internshipId);
}
