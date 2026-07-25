package com.ranihire.Skill2Intern.service;

import com.ranihire.Skill2Intern.model.Role;
import com.ranihire.Skill2Intern.repository.CandidateSkillRepository;
import com.ranihire.Skill2Intern.repository.RoleRepository;
import com.ranihire.Skill2Intern.repository.RoleSkillRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {
    private final CandidateSkillRepository candidateSkillRepository;
    private final RoleSkillRepository roleSkillRepository;
    private final RoleRepository roleRepository;

    public RoleService(CandidateSkillRepository candidateSkillRepository,
                       RoleSkillRepository roleSkillRepository,
                       RoleRepository roleRepository) {
        this.candidateSkillRepository = candidateSkillRepository;
        this.roleSkillRepository = roleSkillRepository;
        this.roleRepository = roleRepository;
    }

    public List<Role> getRecommendedRoles(Integer candidateId) {

        List<Integer> skillIds =
                candidateSkillRepository.findSkillIdsByCandidateId(candidateId);

        return roleSkillRepository.findRecommendedRoles(skillIds);
    }
    public List<Role> getAllRoles() {

        return roleRepository.findAll();

    }

}
