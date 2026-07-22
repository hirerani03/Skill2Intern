package com.ranihire.Skill2Intern.repository;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserProfileRepository extends JpaRepository<UserProfile, Integer> {
    UserProfile findByUserId(Integer id);
}
