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
  "line": 17,
  "name": "login into account with a valid email",
  "description": "",
  "id": "account-management;login-into-account-with-a-valid-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@accountLogin"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I enter \"\u003cemail\u003e\" \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on sign in",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Account dashboard should display successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "account-management;login-into-account-with-a-valid-email;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 24,
      "id": "account-management;login-into-account-with-a-valid-email;;1"
    },
    {
      "cells": [
        "mytesting621@gmail.com",
        "Mamba123"
      ],
      "line": 25,
      "id": "account-management;login-into-account-with-a-valid-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "login into account with a valid email",
  "description": "",
  "id": "account-management;login-into-account-with-a-valid-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@accountManagement"
    },
    {
      "line": 16,
      "name": "@accountLogin"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I enter \"mytesting621@gmail.com\" \"Mamba123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on sign in",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Account dashboard should display successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountManagementSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 13694790300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mytesting621@gmail.com",
      "offset": 9
    },
    {
      "val": "Mamba123",
      "offset": 34
    }
  ],
  "location": "AccountManagementSteps.iEnter(String,String)"
});
formatter.result({
  "duration": 469665400,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.iClickOnSignIn()"
});
formatter.result({
  "duration": 2165408700,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.accountDashboardShouldDisplaySuccessfully()"
});
formatter.result({
  "duration": 109015700,
  "status": "passed"
});
});