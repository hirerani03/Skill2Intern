package com.ranihire.Skill2Intern.repository;

import com.ranihire.Skill2Intern.model.CandidateSkill;
import com.ranihire.Skill2Intern.model.CandidateSkillId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidateSkillRepository extends JpaRepository<CandidateSkill, CandidateSkillId> {
}
