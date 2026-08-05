package com.ranihire.Skill2Intern.service;

import com.ranihire.Skill2Intern.model.Company;
import com.ranihire.Skill2Intern.repository.CompanyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {
    private final CompanyRepository companyRepository;

    public CompanyService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    public Company getCompanyById(Integer companyId) {
        return companyRepository.findById(companyId)
                .orElseThrow(() -> new RuntimeException("Company not found"));
    }

    public Company addCompany(Company company) {

        if (companyRepository.existsByCompanyName(company.getCompanyName())) {
            throw new RuntimeException("Company already exists");
        }

        return companyRepository.save(company);
    }
}
