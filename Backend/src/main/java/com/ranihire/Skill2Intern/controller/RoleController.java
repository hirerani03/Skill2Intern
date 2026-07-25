package com.ranihire.Skill2Intern.controller;

import com.ranihire.Skill2Intern.model.Role;
import com.ranihire.Skill2Intern.service.RoleService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class RoleController {
    private final RoleService roleService;

    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    @GetMapping("/roles/recommended/{candidateId}")
    public List<Role> getRecommendedRoles(@PathVariable Integer candidateId) {
        return roleService.getRecommendedRoles(candidateId);
    }
}
