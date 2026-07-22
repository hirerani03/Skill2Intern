package com.ranihire.Skill2Intern.controller;

import com.ranihire.Skill2Intern.model.UserProfile;
import com.ranihire.Skill2Intern.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="*")
@RestController
public class UserProfileController {
    @Autowired
    private UserProfileRepository userProfileRepository;

    @PostMapping("/addProfile")
    public String addUserProfile(@RequestBody UserProfile userProfile) {

        UserProfile existingProfile = userProfileRepository.findByUserId(userProfile.getUser().getId());

        if (existingProfile != null) {
            return "Profile already exists for this user.";
        }

        userProfileRepository.save(userProfile);
        return "Profile added successfully.";
    }

    @GetMapping("/getProfile/{id}")
    public UserProfile getUserProfile(@PathVariable Integer id){
        return userProfileRepository.findById(id).orElse(null);
    }

    @PutMapping("/updateProfile/{id}")
    public UserProfile updateProfile(@PathVariable int id,
                                     @RequestBody UserProfile updatingProfile) {

        UserProfile existingProfile = userProfileRepository.findById(id).orElse(null);

        if (existingProfile == null) {
            return null;
        }

        existingProfile.setFullName(updatingProfile.getFullName());
        existingProfile.setEmail(updatingProfile.getEmail());
        existingProfile.setPhone(updatingProfile.getPhone());
        existingProfile.setCollege(updatingProfile.getCollege());
        existingProfile.setDegree(updatingProfile.getDegree());
        existingProfile.setBranch(updatingProfile.getBranch());
        existingProfile.setGraduationYear(updatingProfile.getGraduationYear());
        existingProfile.setCgpa(updatingProfile.getCgpa());
        existingProfile.setCity(updatingProfile.getCity());
        existingProfile.setPreferredRoles(updatingProfile.getPreferredRoles());
        existingProfile.setGithubUrl(updatingProfile.getGithubUrl());
        existingProfile.setLinkedinUrl(updatingProfile.getLinkedinUrl());
        existingProfile.setPortfolioUrl(updatingProfile.getPortfolioUrl());
        existingProfile.setBio(updatingProfile.getBio());

        return userProfileRepository.save(existingProfile);
    }
}
