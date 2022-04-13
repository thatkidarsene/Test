package com.example.demo.Scripts;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.testng.ISuite;
import org.testng.ISuiteListener;

public class Test_Ajout_Listener implements ISuiteListener {
	
	 public String objective;
	 public String date;
	 public String time;
	 public String test_data;
	 public String status;
	 public String error_message;
	 public String executor;
    @Override
	public void onStart(ISuite suite) {
		System.out.println("TestNG suite default output directory = "+suite.getOutputDirectory());
		}

	@Override
	public void onFinish(ISuite suite) {
		System.out.println("TestNG invoked methods = " +suite.getAllInvokedMethods());
		
		this.objective = suite.getName();
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
		LocalDateTime now = LocalDateTime.now();
		String tab[] = dtf.format(now).split(" ");
		this.date = tab[0];
		this.time = tab[1];
		this.test_data = "N/A";
		this.status = "passed";
		this.error_message="";
		this.executor = "Test NG(Default)";
	}
}

