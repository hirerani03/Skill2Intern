package com.ranihire.Skill2Intern.repository;

import com.ranihire.Skill2Intern.model.User;
import com.ranihire.Skill2Intern.model.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserProfileRepository extends JpaRepository<UserProfile, Integer> {
    UserProfile findByUserId(Integer id);
}
