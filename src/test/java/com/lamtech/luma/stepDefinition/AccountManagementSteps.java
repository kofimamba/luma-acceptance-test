package com.lamtech.luma.stepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class AccountManagementSteps {
    @Given("^I am on create an account page$")
    public void iAmOnCreateAnAccountPage() {
        //define browser
        WebDriverManager.chromedriver().setup();
        //open browser
        WebDriver driver = new ChromeDriver();
        //maximise browser windows
        driver.manage().window().maximize();
        //launch application
        driver.get("https://demo-m2.bird.eu/");

    }

    @When("^I enter \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
    public void iEnter(String firstname, String lastname, String email, String password, String confirmPassword) throws Throwable {

    }

    @And("^I click on create an account$")
    public void iClickOnCreateAnAccount() {
    }

    @Then("^Account creation is successful$")
    public void accountCreationIsSuccessful() {
    }
}
