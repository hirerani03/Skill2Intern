package com.ranihire.Skill2Intern.service;

import com.ranihire.Skill2Intern.model.Internship;
import com.ranihire.Skill2Intern.repository.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InternshipService {
    private final CandidateSkillRepository candidateSkillRepository;
    private final InternshipSkillRepository internshipSkillRepository;
    private final InternshipRepository internshipRepository;

    public InternshipService(CandidateSkillRepository candidateSkillRepository,
                             InternshipSkillRepository internshipSkillRepository,
                             InternshipRepository internshipRepository) {
        this.candidateSkillRepository = candidateSkillRepository;
        this.internshipSkillRepository = internshipSkillRepository;
        this.internshipRepository = internshipRepository;
    }

    public List<Internship> getRecommendedInternships(Integer candidateId) {

        List<Integer> skillIds =
                candidateSkillRepository.findSkillIdsByCandidateId(candidateId);

        return internshipSkillRepository.findRecommendedInternships(skillIds);
    }
}
