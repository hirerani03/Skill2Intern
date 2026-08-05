package com.ranihire.Skill2Intern.controller;

import com.ranihire.Skill2Intern.model.Internship;
import com.ranihire.Skill2Intern.service.InternshipService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class InternshipController {
    private final InternshipService internshipService;

    public InternshipController(InternshipService internshipService) {
        this.internshipService = internshipService;
    }

    @GetMapping("/internships/recommended/{candidateId}")
    public List<Internship> getRecommendedInternships(@PathVariable Integer candidateId) {
        return internshipService.getRecommendedInternships(candidateId);
    }

}
