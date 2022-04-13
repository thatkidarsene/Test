package com.example.demo.controller;
import java.util.ArrayList;
import java.util.List;
import com.example.demo.model.TestCase;
import com.example.demo.repository.TestCaseRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.service.TestCaseService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class TestCaseController {
    @Autowired
    private TestCaseService tcs;
    
    @Autowired
    private TestCaseRepository tcr;

    @Autowired
    public TestCaseController(TestCaseService tcs){
      this.tcs = tcs;
    }

  
    @GetMapping("/testcase")
    public List<TestCase> getAllTestCases() {
      List<TestCase> lt = new ArrayList<TestCase>();
      tcs.findAll().forEach( (TestCase contact)->{
          System.out.println("adding test with id : "+contact.getTest_id());
          lt.add(contact);
      }
      );
      if (lt.isEmpty()) {
          System.out.printf("TestCases Empty");
        return lt;
      }
      return lt;
    }

    @GetMapping("/testcase/{status}")
    public List<TestCase> getByStatus(@PathVariable("status") String status) {
      List<TestCase> lt = new ArrayList<TestCase>();
      tcr.findByStatus(status).forEach( (TestCase contact)->{
          System.out.println("adding test with id : "+contact.getTest_id());
          lt.add(contact);
      }
      );
      if (lt.isEmpty()) {
          System.out.printf("TestCases Empty");
        return lt;
      }
      return lt;
    }

  }
  