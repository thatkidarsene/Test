package com.example.demo.Scripts;
import org.testng.TestNG;

public class Main {
   
public static void main(String[] args) {
    TestNG testSuite = new TestNG();
    testSuite.setTestClasses(new Class[] { Test_Ajout.class });
    testSuite.addListener(new Test_Ajout_Listener());
    testSuite.setDefaultSuiteName("My Test Suite");
    testSuite.setDefaultTestName("My Test");
    testSuite.setOutputDirectory("./src/main/java/com/example/demo/Scripts/reports");
    testSuite.run();
}
}
