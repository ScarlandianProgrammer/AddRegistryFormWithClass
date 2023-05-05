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
    return true;
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