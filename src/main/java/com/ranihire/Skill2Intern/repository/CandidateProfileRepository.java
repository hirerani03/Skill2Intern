package com.ranihire.Skill2Intern.repository;

import com.ranihire.Skill2Intern.model.CandidateProfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidateProfileRepository extends JpaRepository<CandidateProfile, Integer> {
//    CandidateProfile findByUserUserId(Integer userId);
}
