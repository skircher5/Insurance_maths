/**
 * @author Kircher, Everett (Everettkircher@icloud.com)
 * @version 0.0.1
 * @summary hello world // Created 09.15.16
 * @todo
 */
"use strict";
const PROMPT = require('readline-sync');
const CURRENT_YEAR = 2016

let continueResponse;
let custID, customerFirstName, birthDate, totalCost;
let dueMonth, dueDay, dueYear, numCustomerAge, customerLastName, numAccidents;

function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setPolicyNum();
        setCustomerLastName();
        setCustomerFirstName();
        setDueMonth();
        setDueDay();
        setDueYear();
        setBirthDate();
        setCustomerAge();
        setNumAccidents();
        setTotalCost();
        printTotalCost();
        setContinueResponse();
        return main();
    }
    printGoodbye();
}

main();

function setContinueResponse() {
    if (continueResponse) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
    } else {
        continueResponse = 1;
    }
}


function setPolicyNum() {
    custID = Math.floor((Math.random() * 10000) + 1);
}

function setCustomerLastName() {
    customerLastName = PROMPT.question(`\nPlease enter customers last name: `);
}

function setCustomerFirstName() {
    customerFirstName = PROMPT.question(`\nPlease enter customers first name: `);
}

function setBirthDate() {
    birthDate = PROMPT.question(`\nPlease enter birth date: `);
}

function setDueMonth() {
    dueMonth = PROMPT.question(`\nPlease enter due month: `);
}

function setDueDay() {
    dueDay = PROMPT.question(`\nPlease enter due day: `);
}

function setDueYear() {
    dueYear = PROMPT.question(`\nPlease enter due year: `);
}

function setCustomerAge() {
    numCustomerAge = CURRENT_YEAR - birthDate
}

function setNumAccidents() {
    numAccidents = PROMPT.question(`\nPlease enter at fault accidents: `);
}

function setTotalCost() {
    totalCost = 0;
    const BASE_PRICE = 100;
    const YOUNGEST_AGE_FEE = 20;
    const MEDIUM_AGE_FEE = 10;
    const MAX_AGE_FEE = 30;
    const ACCIDENT = 50;
    if (numCustomerAge > 0) {
        if (numCustomerAge > 15 && numCustomerAge < 30) {
            totalCost = BASE_PRICE + YOUNGEST_AGE_FEE * ACCIDENT * numAccidents;
        } else if (numCustomerAge >= 30 && numCustomerAge < 45) {
            totalCost = BASE_PRICE + MEDIUM_AGE_FEE * ACCIDENT * numAccidents;
        } else if (numCustomerAge >= 60) {
            totalCost = BASE_PRICE + MAX_AGE_FEE * ACCIDENT * numAccidents;
        }
    }
}

function printTotalCost() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\t${customerFirstName}'s bill: \$${totalCost}`);
}

function printGoodbye() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\tGoodbye.`);
}

/*
 This program is designed to prompt customer for basic information about their dog, calculate the price, then output
 the total bill.
 */