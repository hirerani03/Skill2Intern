package com.ranihire.Skill2Intern.controller;

import com.ranihire.Skill2Intern.model.Skill;
import com.ranihire.Skill2Intern.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class SkillController {
    @Autowired
    private SkillRepository skillRepository;

    @GetMapping("/skills")
    public List<Skill> getAllSkills() {
        return skillRepository.findAll(Sort.by("skillName"));
    }
}
