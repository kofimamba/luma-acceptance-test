package com.lamtech.luma.stepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class AccountManagementSteps {
    WebDriver driver;
    @Given("^I am on create an account page$")
    public void iAmOnCreateAnAccountPage() {
        //define browser
        WebDriverManager.chromedriver().setup();
        //open browser
        driver = new ChromeDriver();
        //maximise browser windows
        driver.manage().window().maximize();
        //launch application
        driver.get("https://demo-m2.bird.eu/");
        //click on create an account link
        driver.findElement(By.linkText("Create an Account")).click();

    }

    @When("^I enter \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
    public void iEnter(String firstname, String lastname, String email, String password, String confirmPassword) throws Throwable {
        driver.findElement(By.id("firstname")).sendKeys(firstname);
        driver.findElement(By.id("lastname")).sendKeys(lastname);
        driver.findElement(By.name("email")).sendKeys(email);
        driver.findElement(By.name("password")).sendKeys(password);
        driver.findElement(By.name("password_confirmation")).sendKeys(confirmPassword);

    }

    @And("^I click on create an account$")
    public void iClickOnCreateAnAccount() {
        driver.findElement(By.cssSelector("#form-validate > div > div.primary > button > span")).click();
    }

    @Then("^Account creation is successful$")
    public void accountCreationIsSuccessful() {
        String expectedPageTitle = "My Account";
        String actualPageTitle = driver.getTitle();
        Assert.assertEquals(expectedPageTitle, actualPageTitle);
    }
}
