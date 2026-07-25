package com.ranihire.Skill2Intern.controller;

import com.ranihire.Skill2Intern.repository.CandidateSkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class CandidateSkillController {
    @Autowired
    private CandidateSkillRepository candidateSkillRepository;
}
