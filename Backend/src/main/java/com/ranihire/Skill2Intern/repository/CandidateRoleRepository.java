package com.ranihire.Skill2Intern.repository;

import com.ranihire.Skill2Intern.model.CandidateRole;
import com.ranihire.Skill2Intern.model.CandidateRoleId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CandidateRoleRepository extends JpaRepository<CandidateRole, CandidateRoleId> {
    @Query("""
            SELECT cr.role.roleId
            FROM CandidateRole cr
            WHERE cr.candidateProfile.candidateId = :candidateId
           """)
    List<Integer> findRoleIdsByCandidateId(Integer candidateId);
}
