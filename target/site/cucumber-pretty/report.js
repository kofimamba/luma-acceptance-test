$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AccountManagement.feature");
formatter.feature({
  "line": 2,
  "name": "Account Management",
  "description": "",
  "id": "account-management",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@accountManagement"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "create an account with valid e-mail",
  "description": "",
  "id": "account-management;create-an-account-with-valid-e-mail",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@createAccount"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on create an account page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"\u003cfirstname\u003e\" \"\u003clastname\u003e\" \"\u003cemail\u003e\" \"\u003cpassword\u003e\" \"\u003cconfirmPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on create an account",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Account creation is successful",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "account-management;create-an-account-with-valid-e-mail;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "password",
        "confirmPassword"
      ],
      "line": 12,
      "id": "account-management;create-an-account-with-valid-e-mail;;1"
    },
    {
      "cells": [
        "kofi",
        "mamba",
        "mytesting621@gmail.com",
        "Mamba123",
        "Mamba123"
      ],
      "line": 13,
      "id": "account-management;create-an-account-with-valid-e-mail;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "create an account with valid e-mail",
  "description": "",
  "id": "account-management;create-an-account-with-valid-e-mail;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@accountManagement"
    },
    {
      "line": 4,
      "name": "@createAccount"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on create an account page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"kofi\" \"mamba\" \"mytesting621@gmail.com\" \"Mamba123\" \"Mamba123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on create an account",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Account creation is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountManagementSteps.iAmOnCreateAnAccountPage()"
});
formatter.result({
  "duration": 11984075200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kofi",
      "offset": 9
    },
    {
      "val": "mamba",
      "offset": 16
    },
    {
      "val": "mytesting621@gmail.com",
      "offset": 24
    },
    {
      "val": "Mamba123",
      "offset": 49
    },
    {
      "val": "Mamba123",
      "offset": 60
    }
  ],
  "location": "AccountManagementSteps.iEnter(String,String,String,String,String)"
});
formatter.result({
  "duration": 822451900,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.iClickOnCreateAnAccount()"
});
formatter.result({
  "duration": 2205883301,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.accountCreationIsSuccessful()"
});
formatter.result({
  "duration": 52427000,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cMy Accou[]\u003e but was:\u003cMy Accou[nt]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.lamtech.luma.stepDefinition.AccountManagementSteps.accountCreationIsSuccessful(AccountManagementSteps.java:50)\r\n\tat ✽.Then Account creation is successful(AccountManagement.feature:9)\r\n",
  "status": "failed"
});
});