package com.ranihire.Skill2Intern.repository;

import com.ranihire.Skill2Intern.model.InternshipSkill;
import com.ranihire.Skill2Intern.model.InternshipSkillId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InternshipSkillRepository  extends JpaRepository<InternshipSkill, InternshipSkillId> {
}
