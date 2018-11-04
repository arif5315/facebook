var database =  [
    {
        username: "Arif",
        password: "secret"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "so tried of studying"
    },
    {
        username: "Sally",
        timeline: "Javascript is so cool"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(userName, password) {
    if (userName === database[0].username && password === database[0].password) {
        console.log(newsFeed);
    }
    else {
        alert("Sorry! wrong username and password");
    }
}

signIn(userNamePrompt, passwordPrompt);