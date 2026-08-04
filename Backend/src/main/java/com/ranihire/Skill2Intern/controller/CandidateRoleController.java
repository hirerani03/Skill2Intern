package com.ranihire.Skill2Intern.controller;

import com.ranihire.Skill2Intern.dto.CandidateRoleRequest;
import com.ranihire.Skill2Intern.model.*;
import com.ranihire.Skill2Intern.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class CandidateRoleController {
    private final CandidateRoleRepository candidateRoleRepository;
    private final CandidateProfileRepository candidateProfileRepository;
    private final RoleRepository roleRepository;

    public CandidateRoleController(
            CandidateRoleRepository candidateRoleRepository,
            CandidateProfileRepository candidateProfileRepository,
            RoleRepository roleRepository) {

        this.candidateRoleRepository = candidateRoleRepository;
        this.candidateProfileRepository = candidateProfileRepository;
        this.roleRepository = roleRepository;
    }

    @PostMapping("/candidate-roles")
    public ResponseEntity<String> saveCandidateRoles(@RequestBody CandidateRoleRequest request) {

        CandidateProfile candidateProfile =
                candidateProfileRepository.findById(request.getCandidateId()).orElseThrow();

        for (Integer roleId : request.getRoleIds()) {

            Role role = roleRepository.findById(roleId).orElseThrow();
            CandidateRole candidateRole =
                    new CandidateRole(candidateProfile, role);

            candidateRoleRepository.save(candidateRole);
        }
        return ResponseEntity.ok("roles saved successfully");
    }
}
