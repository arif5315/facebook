var database =  [
    {
        username: "arif",
        password: "secret"
    },
    {
        username: "sally",
        password: "password"
    },
    {
        username: "mitch",
        password: "111a"
    },

];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "so tried of studying"
    },
    {
        username: "Sally",
        timeline: "Javascript is so cool"
    },
    {
        username: "Mitch",
        timeline: " getting Javascript done"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
    var bool = false;
    for (let i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            bool = true;
        }
    }
    return bool;
}

function signIn(userName, password) {
    var validUser = isUserValid(userName, password);
    if (validUser) {
        console.log(newsFeed);
    }
    else{
        alert("Sorry! Wrong username and password" );
    }    
}

signIn(userNamePrompt, passwordPrompt);