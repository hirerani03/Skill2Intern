package com.ranihire.Skill2Intern.repository;

import com.ranihire.Skill2Intern.model.CandidateSkill;
import com.ranihire.Skill2Intern.model.CandidateSkillId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CandidateSkillRepository extends JpaRepository<CandidateSkill, CandidateSkillId> {
    @Query("""
            SELECT cs.skill.skillId
            FROM CandidateSkill cs
            WHERE cs.candidateProfile.candidateId = :candidateId
           """)

    List<Integer> findSkillIdsByCandidateId(Integer candidateId);
}
