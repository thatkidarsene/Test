from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import pytest

def test_ajout():
    driver = webdriver.Chrome('./chromedriver')
    # Get the target URL
    driver.get('http://localhost:4200')
    # Wait for 5 seconds to load the webpage completely
    time.sleep(5)
    
    # Find the button using text
    driver.find_element_by_xpath('//button/span/mat-icon[normalize-space()="add"]').click()
    driver.find_element_by_xpath('//input').send_keys("testing demo")
    driver.find_element_by_xpath('//button/span[normalize-space()="Ajouter"]').click()
    time.sleep(5)
    #Check is window is closed
    element = driver.find_elements_by_xpath('//input')
    if len(element):
        print("element is present")
    else:
        print("element is not present")

if __name__ == "__main__":
    args_str = "-v"
    args = args_str.split(" ")
    pytest.main()