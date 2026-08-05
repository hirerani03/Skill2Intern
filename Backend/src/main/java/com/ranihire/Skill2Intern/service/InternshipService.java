package com.ranihire.Skill2Intern.service;

import com.ranihire.Skill2Intern.model.Internship;
import com.ranihire.Skill2Intern.repository.InternshipRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InternshipService {
    private final InternshipRepository internshipRepository;

    public InternshipService(InternshipRepository internshipRepository) {
        this.internshipRepository = internshipRepository;
    }

    // Add Internship
    public Internship addInternship(Internship internship) {
        return internshipRepository.save(internship);
    }

    // Get All Internships
    public List<Internship> getAllInternships() {
        return internshipRepository.findAll();
    }

    // Get Internship By Id
    public Internship getInternshipById(Integer internshipId) {
        return internshipRepository.findById(internshipId)
                .orElseThrow(() -> new RuntimeException("Internship not found"));
    }
}
