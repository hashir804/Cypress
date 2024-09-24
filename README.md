# Cypress Learning Repository

Welcome to my Cypress learning repository! This repository documents my journey in learning Cypress, a powerful frontend web automation testing tool. Below you'll find details about Cypress, the topics I've covered so far, and how to navigate the codebase.

## Overview

Cypress is a modern web application testing tool designed for frontend web automation. It’s particularly effective for testing modern applications built with frameworks like React.js and Angular, or any application that runs in a browser. One of its standout features is that it does not use Selenium libraries, making it an open-source, Node.js-based solution that comes with an npm module.

## Key Features of Cypress

- **Time Travel**: Capture screenshots of every test step, allowing easy navigation backward and forward.
- **Debuggability**: Built-in tools make it easy to debug failed tests.
- **Automatic Waits**: Cypress has built-in waits, making tests more reliable.
- **Consistent Results**: Ensures that tests yield reliable, repeatable outcomes.
- **Screenshots & Videos**: Automatically captures screenshots and videos of your tests.
- **Cross Browser Testing**: Test your web applications across different browsers, both locally and remotely.

## Cypress Ecosystem

- **Test Runner**: The core of Cypress, this open-source component can be downloaded and run locally.
- **Dashboard**: A paid feature that records tests, maintains history, and provides advanced test analytics.

## Who Can Use Cypress?

Cypress is designed for both developers and QA engineers. It supports end-to-end test cases, integration tests, and unit test cases. It also provides capabilities for API testing.

## Limitations

While Cypress is powerful, it does have some limitations:
- **Windows-based/Mobile Apps**: Cypress cannot automate tests for Windows-based or mobile applications.
- **Limited Third-Party Integration**: Some third-party reporting tools have limited support.
- **JavaScript/TypeScript Only**: Cypress is limited to these languages for writing tests.
- **File Operations**: Reading and writing data into files can be challenging.

## How to Install Cypress and Get Started

### Step 1: Clone the Repository

First, you'll need to clone this repository to your local machine. Open your terminal and run the following command:

``` git clone https://github.com/hashir804/Cypress.git ``` 



### Step 2: Navigate to the Project Directory

After cloning the repository, navigate to the project directory

``` cd Cypress  ``` 

### Step 3: Install Node.js

If you don't have Node.js installed on your machine, you'll need to install it. You can download it from the official Nodejs website. (https://nodejs.org/) 

### Step 4: Install Cypress and Other Dependencies

Once Node.js is installed, you can install Cypress and any other necessary dependencies. 

Run the following command in your terminal:

``` npm install ``` 

This command will launch the Cypress Test Runner, where you can select and run your tests.

### Step 5: Open Cypress

After the installation is complete, you can open Cypress by running the following command:

```  npx cypress open ``` 

### Step 6: Running Tests
To run the tests in headless mode (without the Cypress Test Runner UI), use the following command:


```  npx cypress run ``` 

This will execute all the test files in the cypress/integration folder.


## Locators

Cypress supports various ways to locate elements on the web page:

- **CSS Selectors**: The primary way to target elements.
- **XPath**: Supported, but not as native as CSS Selectors.

### CSS Selector Syntax

- `#id`
- `tag.class`
- `tag[attribute='value']`
- `tag.class[attribute='value']`

## Assertions

Assertions are essential in testing for validating conditions:

- **Implicit Assertions**: Directly supported by Cypress, using methods like `should` and `and`.
- **Explicit Assertions**: Use `expect` for BDD-style assertions and `assert` for TDD-style assertions.

## Conclusion

This repository is a work in progress as I continue to learn and expand my knowledge of Cypress. Feel free to explore the code, and if you have any suggestions or contributions, I’d love to hear from you!

