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

    @PostMapping("/internships")
    public Internship addInternship(@RequestBody Internship internship) {
        return internshipService.addInternship(internship);
    }

    @GetMapping("/internships")
    public List<Internship> getAllInternships() {
        return internshipService.getAllInternships();
    }

    @GetMapping("/internships/{internshipId}")
    public Internship getInternshipById(@PathVariable Integer internshipId) {
        return internshipService.getInternshipById(internshipId);
    }
}
