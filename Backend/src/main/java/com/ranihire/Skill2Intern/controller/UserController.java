package com.ranihire.Skill2Intern.controller;

import com.ranihire.Skill2Intern.model.User;
import com.ranihire.Skill2Intern.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins="*")
@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public User newUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User dbUser = userRepository.findByUserName(user.getUserName());
        if (dbUser == null) {
            return "User not found";
        }

        if (dbUser.getPassword().equals(user.getPassword())) {
            return "Login Successful";
        } else {
            return "Invalid Password";
        }
    }

}
