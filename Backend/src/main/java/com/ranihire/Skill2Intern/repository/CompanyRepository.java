package com.ranihire.Skill2Intern.repository;

import com.ranihire.Skill2Intern.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CompanyRepository extends JpaRepository<Company, Integer> {
    Optional<Company> findByCompanyName(String companyName);

    boolean existsByCompanyName(String companyName);
}
