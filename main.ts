import inquirer from "inquirer"

const quiz: {

    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;

} = await inquirer.prompt([

    {
        name:"question_1",
        type: "list",
        message: "What is a major problem that affects the whole world?",
        choices: ["Local Election", "Climate Change", "Neighbourhood Disputes", "Farming Techniques"]

    },
    {
        name:"question_2",
        type: "list",
        message: "What should countries do to help people who have to leave their homes because of wars or disasters?",
        choices: ["Close their Borders", "Offer them shelter and safety", "Ignore their needs", "Build Fences"]

    },
    {
        name:"question_3",
        type: "list",
        message: "How can countries help each other if some have more computers and internet than others?",
        choices: ["Share their social media accounts", "Build taller buildings", "Giveaway old smartphones", "Provide support for technology access"]

    },
    {
        name:"question_4",
        type: "list",
        message: "Why is it important for everyone to have good access to healthcare?",
        choices: ["To make money", "To keep everyone healthy", "To increase traffic", "To watch TV"]

    },
    {
        name:"question_5",
        type: "list",
        message: "What is something countries can do to keep their traditional culture alive?",
        choices: ["Forget old stories", "Only speaks new language", "Destroy old buildings", "Protect historical places and traditions"]

    },
]);

let score: number = 0;

switch(quiz.question_1){
    case "Climate Change":
        console.log("1. Correct!");
        ++score;
        break;
        default:
            console.log("1. Incorrect")
}
switch(quiz.question_2){
    case "Offer them shelter and safety":
        console.log("2. Correct!");
        ++score;
        break;
        default:
            console.log("2. Incorrect")
}
switch(quiz.question_3){
    case "Provide support for technology access":
        console.log("3. Correct!");
        ++score;
        break;
        default:
            console.log("3. Incorrect")
}
switch(quiz.question_4){
    case "To keep everyone healthy":
        console.log("4. Correct!");
        ++score;
        break;
        default:
            console.log("4. Incorrect")
}
switch(quiz.question_5){
    case "Protect historical places and traditions":
        console.log("5. Correct!");
        ++score;
        break;
        default:
            console.log("5. Incorrect")
}

console.log(`Score: ${score}`);
