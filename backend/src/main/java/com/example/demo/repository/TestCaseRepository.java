package com.example.demo.repository;
import java.util.List;

import com.example.demo.model.TestCase;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TestCaseRepository extends MongoRepository<TestCase, String> {
    public List<TestCase> findByStatus(String status);
}
