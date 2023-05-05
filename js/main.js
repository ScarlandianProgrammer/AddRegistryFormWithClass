var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.getElementById("input-button");
    addBtn.onclick = addGame;
};
function addGame() {
    if (isDataValid()) {
        var inputGame = getGame();
        displayGame(inputGame);
    }
}
function isDataValid() {
    return true;
}
function getGame() {
    var game = new VideoGame;
    game.name = document.getElementById("game-name").value;
    game.price = parseFloat(document.getElementById("game-price").value);
    game.rating = document.getElementById("game-rating").value;
    var isOnlineOnly = document.getElementById("game-online");
    game.onlineOnly = isOnlineOnly.checked;
    return game;
}
function displayGame(game) {
    var gameDisplay = document.getElementById("game-history");
    var gameHeader = document.createElement("h2");
    gameHeader.innerText = game.name;
    var gameDescription = document.createElement("p");
    gameDescription.innerText = "Name: ".concat(game.name + "\n", "Price: $").concat(game.price.toFixed(2) + "\n", "Rating: ").concat(game.rating + "\n", "Online Only: ").concat(game.onlineOnly);
    gameDisplay.appendChild(gameHeader);
    gameDisplay.appendChild(gameDescription);
}
