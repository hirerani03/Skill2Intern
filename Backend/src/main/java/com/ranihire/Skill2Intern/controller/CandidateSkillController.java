package com.ranihire.Skill2Intern.controller;

import com.ranihire.Skill2Intern.dto.CandidateSkillRequest;
import com.ranihire.Skill2Intern.model.CandidateProfile;
import com.ranihire.Skill2Intern.model.CandidateSkill;
import com.ranihire.Skill2Intern.model.Skill;
import com.ranihire.Skill2Intern.repository.CandidateProfileRepository;
import com.ranihire.Skill2Intern.repository.CandidateSkillRepository;
import com.ranihire.Skill2Intern.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class CandidateSkillController {
    @Autowired
    private CandidateSkillRepository candidateSkillRepository;

    @Autowired
    private CandidateProfileRepository candidateProfileRepository;

    @Autowired
    private SkillRepository skillRepository;


    @PostMapping("/candidate-skills")
    public ResponseEntity<String> saveCandidateSkills(
            @RequestBody CandidateSkillRequest request) {

        System.out.println("Candidate ID: " + request.getCandidateId());
        System.out.println("Skill IDs: " + request.getSkillIds());

        CandidateProfile candidateProfile =
                candidateProfileRepository.findById(request.getCandidateId())
                        .orElseThrow(() -> new RuntimeException(
                                "Candidate not found: " + request.getCandidateId()
                        ));

        for (Integer skillId : request.getSkillIds()) {

            System.out.println("Checking Skill ID: " + skillId);

            Skill skill =
                    skillRepository.findById(skillId)
                            .orElseThrow(() -> new RuntimeException(
                                    "Skill not found: " + skillId
                            ));

            CandidateSkill candidateSkill =
                    new CandidateSkill(candidateProfile, skill);

            candidateSkillRepository.save(candidateSkill);
        }

        return ResponseEntity.ok("Skills saved successfully");
    }

}
