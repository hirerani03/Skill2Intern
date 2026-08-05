package com.ranihire.Skill2Intern.controller;

import com.ranihire.Skill2Intern.model.Company;
import com.ranihire.Skill2Intern.service.CompanyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CompanyController {
    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping("/companies")
    public List<Company> getAllCompanies() {
        return companyService.getAllCompanies();
    }

    @GetMapping("/companies/{companyId}")
    public Company getCompanyById(@PathVariable Integer companyId) {
        return companyService.getCompanyById(companyId);
    }

    @PostMapping("/companies")
    public Company addCompany(@RequestBody Company company) {
        return companyService.addCompany(company);
    }
}
