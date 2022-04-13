package com.example.demo.Scripts;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;  
import org.testng.annotations.AfterTest;  
import org.testng.annotations.BeforeTest;  
import org.testng.annotations.Test;  
public class Test_Ajout {  
 
public static WebDriver driver ;

@Test             
public void test() {      
// set the system property for Chrome driver      
System.setProperty("webdriver.chrome.driver", "./src/main/java/com/example/demo/Scripts/chromedriver.exe");  
driver = new ChromeDriver(); 
// Create driver object for CHROME browser  
//driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);  
driver.manage().window().maximize();  
driver.get("http://localhost:4200"); 
driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);  
driver.findElement(By.xpath("//button/span/mat-icon[normalize-space()='add']")).click();
driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);  
driver.findElement(By.xpath("//input")).sendKeys("testing demo");
driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);  
driver.findElement(By.xpath("//button/span[normalize-space()='Ajouter']")).click();
driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);  
List<WebElement> l = driver.findElements(By.xpath("//input"));
if(l.size()>0){
    System.out.println("element is present");
 } else {
   System.out.println("element is not present");
 }   
 driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);  
}
@Test             
public void test_another() {      
// set the system property for Chrome driver                      
System.out.println("Another Test : Success!!!");  
}  

@Test             
public void test_three() {      
// set the system property for Chrome driver                      
System.out.println(" Test Three : Success!!!");  
}  


@BeforeTest  
public void beforeTest() {    
System.out.println("before test");  
}     
@AfterTest  
public void afterTest() {  
if(driver!=null){
   driver.quit();
}
System.out.println("after test");
}  

}