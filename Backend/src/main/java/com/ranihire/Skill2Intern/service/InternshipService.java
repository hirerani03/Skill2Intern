package com.ranihire.Skill2Intern.service;

import com.ranihire.Skill2Intern.dto.RecommendedInternshipResponse;
import com.ranihire.Skill2Intern.model.Internship;
import com.ranihire.Skill2Intern.repository.*;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

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

    public List<RecommendedInternshipResponse> getRecommendedInternships(
            Integer candidateId) {

        List<Integer> candidateSkillIds =
                candidateSkillRepository.findSkillIdsByCandidateId(candidateId);

        List<Internship> internships =
                internshipSkillRepository.findRecommendedInternships(candidateSkillIds);

        Set<Integer> candidateSkills =
                new HashSet<>(candidateSkillIds);

        return internships.stream()
                .map(internship -> {

                    List<Integer> internshipSkillIds =
                            internshipSkillRepository.findSkillIdsByInternshipId(
                                    internship.getInternshipId());

                    long matchingSkills =
                            internshipSkillIds.stream()
                                    .filter(candidateSkills::contains)
                                    .count();

                    int skillMatchPercentage =
                            (int) ((matchingSkills * 100.0)
                                    / internshipSkillIds.size());

                    return new RecommendedInternshipResponse(
                            internship,
                            skillMatchPercentage
                    );
                })
                .collect(Collectors.toList());
    }

    public Internship getInternshipById(Integer internshipId)
    {
        return internshipRepository.findById(internshipId)
                .orElseThrow(() ->
                        new RuntimeException("Internship not found with id: " + internshipId) );
    }
}
