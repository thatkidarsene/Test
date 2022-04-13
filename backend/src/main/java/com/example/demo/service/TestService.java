package com.example.demo.service;
import com.example.demo.model.Test;
import org.springframework.stereotype.Service;
import com.example.demo.repository.TestRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class TestService {
    @Autowired
    private TestRepository tr;

    public List<Test> findAll() {
        return tr.findAll(); 
    }


}
