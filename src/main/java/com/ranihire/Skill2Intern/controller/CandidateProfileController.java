package com.ranihire.Skill2Intern.controller;

import com.ranihire.Skill2Intern.model.CandidateProfile;
import com.ranihire.Skill2Intern.repository.CandidateProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="*")
@RestController
public class CandidateProfileController {
    @Autowired
    private CandidateProfileRepository candidateProfileRepository;

    @PostMapping("/addCandidateProfile")
    public CandidateProfile addCandidateProfile(@RequestBody CandidateProfile  candidateProfile) {

        return candidateProfileRepository.save(candidateProfile);
    }

    @GetMapping("/getCandidateProfile/{candidateId}")
    public CandidateProfile  getCandidateProfile(@PathVariable Integer candidateId){
        return candidateProfileRepository.findById(candidateId).orElse(null);
    }

    @PutMapping("/updateCandidateProfile/{candidateId}")
    public CandidateProfile updateProfile(@PathVariable int candidateId,
                                     @RequestBody CandidateProfile updatingProfile) {

        CandidateProfile existingProfile = candidateProfileRepository.findById(candidateId).orElse(null);

        if (existingProfile == null) {
            return null;
        }

        existingProfile.setName(updatingProfile.getName());
        existingProfile.setEmail(updatingProfile.getEmail());
        existingProfile.setMobile(updatingProfile.getMobile());
        existingProfile.setCollege(updatingProfile.getCollege());
        existingProfile.setDegree(updatingProfile.getDegree());
        existingProfile.setBranch(updatingProfile.getBranch());
        existingProfile.setPassoutYear(updatingProfile.getPassoutYear());
        existingProfile.setCgpa(updatingProfile.getCgpa());
        existingProfile.setGithubUrl(updatingProfile.getGithubUrl());
        existingProfile.setLinkedinUrl(updatingProfile.getLinkedinUrl());
        existingProfile.setPortfolioUrl(updatingProfile.getPortfolioUrl());
        existingProfile.setBio(updatingProfile.getBio());

        return candidateProfileRepository.save(existingProfile);
    }
}
