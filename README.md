# Homework 03 JavaScript: Password Generator

## Introduction

In this assignment, we were to create a random password generator that prompted the user for the following:

- Number of desired characters in the password between 8 and 128, inclusive.
- Whether they would like lower case characters
- Whether they would like upper case characters
- Whether they would like numeric characters
- Whether they would like special characters

In addition, we needed to check their input for errors on each step.

Next, the final password would be generated and displayed.

## Approach

To realize the password generator, I took the following steps:

- I asked the user for the desired number of characters and looped on that question until their answer was between 8 and 128, inclusive
- I asked the user yes or no for each of the types of characters - then checked to make sure that at least one had been selected
- To generate the password, I utilized a random number generator between 32 and 126, inclusive - all of the ASCII character codes - with the following checking
  - For each random character selected, I checked which type of character it was and whether the user had selected that type.
  - If this was true, then I added the character to the string and continue.
  - If it was a character type that they did not want, then I reset the loop back one counter value and tried again.
  - One note on the special characters:
    - The special character values are distributed throughout the ASCII table. Given this, I first checked the other three types (lowercase, uppercase, and numeric), then, if it wasn't one of those, I knew it was a special character.

## Results

The password generator works well with all input conditions.

### Path to GitHub Repository

<https://github.com/JonPointer/DUFS_Homework_03_Password_Generator>

### Path to GitHub Hosted Application

<https://jonpointer.github.io/DUFS_Homework_03_Password_Generator/>

### Screenshot of the completed application

![Password Generator Screenshot](./Assets/Final-Solution-Screenshot.PNG)

# The following is the original Readme file assignment

# 03 JavaScript: Password Generator

## Your Task

This week’s homework requires you to create an application that an employee can use to generate a random password based on criteria they’ve selected by modifying starter code. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of Password Special Characters from the OWASP Foundation](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![password generator demo](./Assets/03-javascript-homework-demo.png)

## Grading Requirements

This homework is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

- Satisfies all of the above acceptance criteria plus the following:

  - The homework should not produce any errors in the console when you inspect it using Chrome DevTools.

### Deployment: 32%

- Application deployed at live URL.

- Application loads with no errors.

- Application GitHub URL submitted.

- GitHub repository that contains application code.

### Application Quality: 15%

- Application user experience is intuitive and easy to navigate.

- Application user interface style is clean and polished.

- Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

- Repository has a unique name.

- Repository follows best practices for file structure and naming conventions.

- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

- Repository contains multiple descriptive commit messages.

- Repository contains quality README file with description, screenshot, and link to deployed application.

## Review

You are required to submit the following for review:

- The URL of the deployed application.

- The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

---

© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
