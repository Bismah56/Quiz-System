#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let studentAnsGK:any[] = [];
let AnswersGK:any[] = ["had been lying / was spotted","accross","at","has been scolding","originated / began",0.00006,4,"20%",8,7,"Yellow Sea","Denmark","796,096 sq km","Manchar","Hindu Kush Range"];

let studentAnsTS:any[] = [];
let AnswersTSquiz = ["TRUE","Methods","FALSE","Javascript","Both A & B","TRUE","All of the above","the number of parameters is not known","export","TRUE"];
let Mcq:any;

async function GeneralKnowledgeQuiz() {
    console.log(chalk.bold.magentaBright("\n\t<<<<<((--- GENERAL KNOWLEDGE QUIZ ---))>>>>>\n"));
    Mcq = await inquirer.prompt([
        {
            name : "one",
            type : "rawlist",
            message : `Q1) The wounded hunter _________ on the ground for almost an hour when, coincidentally, he ________ by another hunter, who must have keen eyes.`,
            choices : [
                "has been lying / is spotting",
                "has lying / will be spotted",
                "will have lying / had been spotted",
                "had been lying / was spotted"
            ]
        },
        {
            name : "two",
            type : "rawlist",
            message : `Q2) Our sir teaches Mathematics _________ English.`,
            choices : [
                "accross",
                "besides",
                "both",
                "beside"
            ]
        },
        {
            name : "three",
            type : "rawlist",
            message : `Q3) Please, donot laugh _____ those beggars.`,
            choices : [
                "for",
                "against",
                "at",
                "from"
            ]
        },
        {
            name : "four",
            type : "rawlist",
            message : `Q4) She __________ her son for 15 minutes.`,
            choices : [
                "is scolding",
                "has been scolded",
                "has been scolding",
                "scold"
            ]
        },
        {
            name : "five",
            type : "rawlist",
            message : `Q5) Tourists _________ when large numbers of middle-class people ___________ to join the more wealthy aristocratic travellers.`,
            choices : [
                "have originated / had begun",
                "could have originated / have begun",
                "had originated / began",
                "originated / began"
            ]
        },
        {
            name : "six",
            type : "rawlist",
            message : `Q6) 0.003 x 0.02 = ?`,
            choices : [
                "0.006",
                "0.06",
                "0.0006",
                "0.00006"
            ]
        },
        {
            name : "seven",
            type : "rawlist",
            message : `Q7) What is the average of the numbers: 0, 0, 4, 10, 5, and 5 ?`,
            choices : [
                "2",
                "3",
                "4",
                "5"
            ]
        },
        {
            name : "eight",
            type : "rawlist",
            message : `Q8) What is the rate of discount if a car which price was $4,000 was sold for $3,200 ?`,
            choices : [
                "14%",
                "16%",
                "18%",
                "20%"
            ]
        },
        {
            name : "nine",
            type : "rawlist",
            message : `Q9) |-4| + |4| - 4 + 4 = ?`,
            choices : [
                "0",
                "2",
                "4",
                "8"
            ]
        },
        {
            name : "ten",
            type : "rawlist",
            message : `Q10) What is the value of x in the equation 3x - 15 - 6 = 0 ?`,
            choices : [
                "7",
                "8",
                "9",
                "-9"
            ]
        },
        {
            name : "eleven",
            type : "rawlist",
            message : `Q11) The Hwang Ho River falls into:`,
            choices : [
                "Indian Ocean",
                "Yellow Sea",
                "Red Sea",
                "Bay of China"
            ]
        },
        {
            name : "twelve",
            type : "rawlist",
            message : `Q12) Greenland is under the rule of:`,
            choices : [
                "Turkey",
                "Germany",
                "Denmark",
                "Portugal"
            ]
        },
        {
            name : "thirteen",
            type : "rawlist",
            message : `Q13) What is the total area of Pakistan?`,
            choices : [
                "796,096 sq km",
                "798,096 sq km",
                "796,094 sq km",
                "797,096 sq km"
            ]
        },
        {
            name : "fourteen",
            type : "rawlist",
            message : `Q14) The largest Lake of Pakistan is`,
            choices : [
                "Sat Para",
                "Kachura",
                "Manchar",
                "None of these"
            ]
        },
        {
            name : "fifteen",
            type : "rawlist",
            message : `Q15) Name the range which separates Pakistan from Afghanistan?`,
            choices : [
                "Hindu Kush Range",
                "Himalayas Range",
                "Pamir Range",
                "Karakoram"
            ]
        }
    ]);
    
};

let MCQ:any;

async function typescriptQuiz() {
    console.log(chalk.bold.magentaBright("\n\t<<<<<((--- TYPESCRIPT QUIZ ---))>>>>>\n"));
    MCQ = await inquirer.prompt([
        {
            name : "one",
            type : "rawlist",
            message : "Q1. TypeScript supports all OOP principles.",
            choices : [
                "FALSE",
                "TRUE"
            ]
        },
        {
            name : "two",
            type : "rawlist",
            message : "Q2. Which of these is a backported feature of TypeScript?",
            choices : [
                "Classes",
                "Modules",
                "Arrow",
                "Methods"
            ]
        },
        {
            name : "three",
            type : "rawlist",
            message : "Q3. TypeScript files cannot be debugged.",
            choices : [
                "FALSE",
                "TRUE"
            ]
        },
        {
            name : "four",
            type : "rawlist",
            message : "Q4. TypeScript is the typed superset of:",
            choices : [
                "ReactJS",
                "C#",
                "Javascript",
                "JAVA"
            ]
        },
        {
            name : "five",
            type : "rawlist",
            message : "Q5. How to compile a module?",
            choices : [
                "tsc--module amd mymodule.ts",
                "tsc -m amd mymodule.ts",
                "Both A & B",
                "None Of These"
            ]
        },
        {
            name : "six",
            type : "rawlist",
            message : "Q6. Server side and client side applications can be written using TypeScript",
            choices : [
                "FALSE",
                "TRUE"
            ]
        },
        {
            name : "seven",
            type : "rawlist",
            message : "Q7. Which of these statements is true?",
            choices : [
                "an interface extends another interface in TypeScript",
                "an interface cannot give out any JavaScript code",
                "an interface extends a class in TypeScript",
                "All of the above"
            ]
        },
        {
            name : "eight",
            type : "rawlist",
            message : "Q8. When is rest parameter used in a function?",
            choices : [
                " the function needs to be executed asynchronously",
                "the type of parameter is not known",
                "the function is called recursively",
                "the number of parameters is not known"
            ]
        },
        {
            name : "nine",
            type : "rawlist",
            message : "Q9. Which keyword declares a module?",
            choices : [
                "declare",
                "namespace",
                "type",
                "export"
            ]
        },
        {
            name : "ten",
            type : "rawlist",
            message : "Q10. Typescript supports enum:",
            choices : [
                "FALSE",
                "TRUE"
            ]
        }
    ]);
};

console.log(chalk.bold.hex("D470A2")("\n\t<<<<<<(---------------------------------------------------------------)>>>>>>"));
console.log(chalk.bold.hex("D470A2")("\t\t\t\t\tQuiz System"));
console.log(chalk.bold.hex("D470A2")("\t<<<<<<(---------------------------------------------------------------)>>>>>>\n"));

let studentChoice = await inquirer.prompt(
    {
        name : "Quiz",
        type : "list",
        message : "Which Quiz would you like to attempt?",
        choices : [
            "GeneralKnowledgeQuiz",
            "typescriptQuiz"
        ]
    }
);

function Result() {
    let Marks:number = 0;
    let Percentage:number;
    if (studentChoice.Quiz==="GeneralKnowledgeQuiz") {
        for (let index = 0; index<AnswersGK.length ; index++) {
            if (studentAnsGK[index]==AnswersGK[index]) {
                Marks++;
            };           
        };  
        Percentage = Marks/AnswersGK.length;
        console.log(chalk.bold.yellowBright(`\n\tMarks scored are: ${Marks}/${AnswersGK.length}`));
        console.log(chalk.bold.yellowBright(`\tPercentage is: ${(Percentage*100).toFixed(2)} %`));
        if (Percentage>=0.6) {
            console.log(chalk.bold.greenBright("\n\tCongratulations!! You Passed the quiz.\n"));
        } else {
            console.log(chalk.bold.redBright("\n\tYou Failed the quiz. Better Luck next time.\n"));
        };
    }
    else{
        for (let index = 0; index<AnswersTSquiz.length ; index++) {
            if (studentAnsTS[index]==AnswersTSquiz[index]) {
                Marks++;
            };  
        };
        Percentage = Marks/AnswersTSquiz.length;
        console.log(chalk.bold.yellowBright(`\n\tMarks scored are: ${Marks}/${AnswersTSquiz.length}`));
        console.log(chalk.bold.yellowBright(`\tPercentage is:`,`${Percentage*100} %`));
        if (Percentage>=0.6) {
            console.log(chalk.bold.greenBright("\n\tCongratulations!! You Passed the quiz.\n"));
        } else {
            console.log(chalk.bold.redBright("\n\tYou Failed the quiz. Better Luck next time.\n"));
        };
    };
    
};  

function AnswerSheet() {
    if (studentChoice.Quiz==="GeneralKnowledgeQuiz") {
        AnswersGK.forEach((val,idx)=>{
            console.log(`${idx+1}) ${val}`);
        });
    } else {
        AnswersTSquiz.forEach((val,idx)=>{
            console.log(`${idx+1}) ${val}`);
        });
    }
};

if(studentChoice.Quiz==="GeneralKnowledgeQuiz"){
    console.log(chalk.bold.magentaBright("\n\t\tOkay! Lets Start.."));
    console.log(chalk.bold.yellowBright("\t\tPassing percentage is 60%\n"));
    await GeneralKnowledgeQuiz();
    studentAnsGK.push(Mcq.one,Mcq.two,Mcq.three,Mcq.four,Mcq.five,Mcq.six,Mcq.seven,Mcq.eight,Mcq.nine,Mcq.ten,Mcq.eleven,Mcq.twelve,Mcq.thirteen,Mcq.fourteen,Mcq.fifteen);
}
else if(studentChoice.Quiz==="typescriptQuiz"){
    console.log(chalk.bold.magentaBright("\n\t\tOkay! Lets Start.."));
    console.log(chalk.bold.yellowBright("\t\tPassing percentage is 60%\n"));
    await typescriptQuiz();
    studentAnsTS.push(MCQ.one,MCQ.two,MCQ.three,MCQ.four,MCQ.five,MCQ.six,MCQ.seven,MCQ.eight,MCQ.nine,MCQ.ten);
};

let ask = await inquirer.prompt([
    {
        name : "result",
        type : "confirm",
        message : "Do you want to see your result?"
    }
]);

if (ask.result===true) {
    Result();
    let ask = await inquirer.prompt([
        {
            name : "AnsSheet",
            type : "confirm",
            message : "Do you want to see Answer sheet?"
        }
    ]);
    if(ask.AnsSheet===true){
        AnswerSheet();
    };
};
