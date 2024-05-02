#! /usr/bin/env node

import inquirer from "inquirer";

console.log('\n\tWelcome to "The number guessing game", by Muhammad Laraib\n');

const randomNumber = Math.floor(Math.random() * 5 +1);

const answer = await inquirer.prompt([
    {
        name: "userGuess",
        type: "number",
        message: "Guess a number between 1 and 5: "
    }
]);

if(answer.userGuess === randomNumber){
    console.log("You guessed it right!");
}else{
    console.log("You guessed it wrong! please try again");
};