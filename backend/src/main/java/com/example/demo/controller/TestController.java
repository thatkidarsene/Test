package com.example.demo.controller;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.demo.model.Test;
import com.example.demo.model.TestCase;
import com.example.demo.repository.TestCaseRepository;
import com.example.demo.repository.TestRepository;
import com.example.demo.Scripts.Test_Ajout;
import com.example.demo.Scripts.Test_Ajout_Listener;

import org.testng.TestNG;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import com.example.demo.service.TestService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class TestController {
    @Autowired
    private TestService ts;
    @Autowired TestRepository tr;
    @Autowired TestCaseRepository tcr;
    

    @Autowired
    public TestController(TestService ts){
      this.ts = ts;
    }

    @GetMapping("/run")
    public TestCase runTests(){
      System.out.println("Running Python Script");
     // String script = "python " + "..\\Scripts\\"+"test_ajout.py"+".py";
     // String[] commandToExecute = new String[]{"cmd.exe", "/c", script};
     TestNG testSuite = new TestNG();
    testSuite.setTestClasses(new Class[] { Test_Ajout.class });
    Test_Ajout_Listener listener = new Test_Ajout_Listener();
    testSuite.addListener(listener);
    testSuite.setDefaultSuiteName("My Test Suite");
    testSuite.setDefaultTestName("My Test");
    testSuite.setOutputDirectory("./src/main/java/com/example/demo/Scripts/reports");
    testSuite.run();
      int n = tcr.findAll().size();
    String test_id = Integer.toString(n+1);
    String objective = listener.objective;
    String date = listener.date;
    String time = listener.time;
    String test_data = listener.test_data;
    String status = listener.status;
    String error_message = listener.error_message;
    String executor = listener.executor;
    TestCase tc = new TestCase( test_id, objective,  date,  time,  test_data,  status,  error_message,  executor);
      return tcr.save(tc);
    
    }

    @GetMapping("/tests")
    public List<Test> getAllTestCases() {
      List<Test> lt = new ArrayList<Test>();
      ts.findAll().forEach( (Test contact)->{
          lt.add(contact);
      }
      );
      if (lt.isEmpty()) {
          System.out.printf("TestCases Empty");
        return lt;
      }
      return lt;
    }

    @GetMapping("/tests/{id}")
    public ResponseEntity<Test> getTutorialById(@PathVariable("id") String id) {
      Optional<Test> tutorialData = tr.findById(id);
      if (tutorialData.isPresent()) {
        return new ResponseEntity<>(tutorialData.get(), HttpStatus.OK);
      } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
    }


    @PostMapping("/tests/create")
    public Test createTest(@Validated @RequestBody Test Test) {
      System.out.println("Create Test: " + Test.getTitle()+ "...");
      return tr.save(Test);
    }
  
    @PutMapping("/tests/{id}")
	public ResponseEntity<Test> updateTest(@PathVariable("id") String id, @RequestBody Test test) {
		Optional<Test> t = tr.findById(id);

		if (t.isPresent()) {
			Test _test = t.get();
			_test.setTitle(test.getTitle());
			return new ResponseEntity<>(tr.save(_test), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
  
    @DeleteMapping("/tests/{id}")
    public ResponseEntity deleteTest(@PathVariable("id") String id) {
      System.out.println("Delete Test with ID = " + id + "...");
      tr.deleteById(id);
      return new ResponseEntity<>("Test has been deleted!", HttpStatus.OK);
    }


  }
  