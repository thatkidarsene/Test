package com.example.demo.service;
import com.example.demo.model.TestCase;
import org.springframework.stereotype.Service;
import com.example.demo.repository.TestCaseRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class TestCaseService {
    @Autowired
    private TestCaseRepository tcr;

    public List<TestCase> findAll() {
        return tcr.findAll(); 
    }

}
