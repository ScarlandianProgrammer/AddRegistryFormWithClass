class VideoGame {
    name:string;
    price:number;
    rating:string;
    onlineOnly:boolean;
}

// putting an onload onto the button
window.onload = function(){
    let addBtn = document.getElementById("input-button");
    addBtn.onclick = addGame;
}

function addGame(){
    if(isDataValid()){
        let inputGame = getGame();
        displayGame(inputGame);
    }
}

function isDataValid():boolean{
    let name = <HTMLInputElement>document.getElementById("game-name");
    let price = <HTMLInputElement>document.getElementById("game-price");
    let rating = <HTMLInputElement>document.getElementById("game-rating");
    let isOnlineOnly = <HTMLInputElement>document.getElementById("game-online");
    let errorDisplay = document.getElementById("validation-errors");
    if (name.value != "" && rating.value != "--Choose a Rating--" && price.value != "" && !isNaN(parseFloat(price.value)) && isOnlineOnly != null){
        errorDisplay.innerText = "";
        return true;
    } else {
        errorDisplay.innerText = "";
        if (name.value == "") { // checking if the name is empty
            displayErrors("Enter a name");
        } if (rating.value == "--Choose a Rating--"){ // checking if the rating hasn't been chosen
            displayErrors("Enter a rating");
        } if (price.value == "" && isNaN(parseFloat(price.value))) { // checking if the price is a number or empty
            displayErrors("Enter a real price");
        } if (isOnlineOnly == null) { // checking if the checkbox has malfunctioned
            displayErrors("You broke the program! Congrats!");
        }
        return false;
    }
}

function getGame():VideoGame{
    let game = new VideoGame; // making a new game

    // setting the title
    game.name = (<HTMLInputElement>document.getElementById("game-name")).value; 
    // setting the price
    game.price = parseFloat((<HTMLInputElement>document.getElementById("game-price")).value); 
    // setting the rating    
    game.rating = (<HTMLSelectElement>document.getElementById("game-rating")).value; 
    // setting the onlineOnly
    let isOnlineOnly = <HTMLInputElement>document.getElementById("game-online");
    game.onlineOnly = isOnlineOnly.checked;
    // returning the game
    return game;
}

function displayGame(game):void{
    let gameDisplay = document.getElementById("game-history");

    let gameHeader = document.createElement("h2");
    gameHeader.innerText = game.name;

    let gameDescription = document.createElement("p");
    gameDescription.innerText = `Name: ${game.name + "\n"}Price: $${game.price.toFixed(2) + "\n"}Rating: ${game.rating + "\n"}Online Only: ${game.onlineOnly}`

    gameDisplay.appendChild(gameHeader);
    gameDisplay.appendChild(gameDescription);
}

function displayErrors(errorString:string){
    let errorDisplay = document.getElementById("validation-errors");
    let errorMessage = document.createElement("h4");
    errorMessage.innerText = errorString;
    errorDisplay.appendChild(errorMessage);
}