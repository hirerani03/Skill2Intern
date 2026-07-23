package com.ranihire.Skill2Intern.repository;

import com.ranihire.Skill2Intern.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUserName(String username);
}
