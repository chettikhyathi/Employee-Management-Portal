package com.Vcube.EmployeeManagement.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Vcube.EmployeeManagement.model.Employee;
@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Integer> {

}
