package com.example.demo.model;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "login")
public class TestCase {

  private String test_id;
  private String objective;
  private String date;
  private String time;
  private String test_data;
  private String status;
  private String error_message;
  private String executor;

    public TestCase(String test_id,String objective, String date, String time, String test_data, String status, String error_message, String executor){
            this.test_id = test_id;
            this.objective = objective;
            this.date = date ;
            this.time= time;
            this.test_data = test_data;
            this.status = status ;
            this.error_message = error_message;
            this.executor = executor ;

    }

    /**
     * @return String return the test_id
     */
    public String getTest_id() {
        return test_id;
    }

    /**
     * @param test_id the test_id to set
     */
    public void setTest_id(String test_id) {
        this.test_id = test_id;
    }

    /**
     * @return String return the objective
     */
    public String getObjective() {
        return objective;
    }

    /**
     * @param objective the objective to set
     */
    public void setObjective(String objective) {
        this.objective = objective;
    }

    /**
     * @return String return the date
     */
    public String getDate() {
        return date;
    }

    /**
     * @param date the date to set
     */
    public void setDate(String date) {
        this.date = date;
    }

    /**
     * @return String return the time
     */
    public String getTime() {
        return time;
    }

    /**
     * @param time the time to set
     */
    public void setTime(String time) {
        this.time = time;
    }

    /**
     * @return String return the test_data
     */
    public String getTest_data() {
        return test_data;
    }

    /**
     * @param test_data the test_data to set
     */
    public void setTest_data(String test_data) {
        this.test_data = test_data;
    }

    /**
     * @return String return the status
     */
    public String getStatus() {
        return status;
    }

    /**
     * @param status the status to set
     */
    public void setStatus(String status) {
        this.status = status;
    }

    /**
     * @return String return the executor
     */
    public String getExecutor() {
        return executor;
    }

    /**
     * @param executor the executor to set
     */
    public void setExecutor(String executor) {
        this.executor = executor;
    }


    /**
     * @return String return the error_message
     */
    public String getError_message() {
        return error_message;
    }

    /**
     * @param error_message the error_message to set
     */
    public void setError_message(String error_message) {
        this.error_message = error_message;
    }

}
