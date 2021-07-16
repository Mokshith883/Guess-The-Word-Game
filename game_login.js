function addUser(){
    player1_name = document.getElementById("player1_name").value;
    player2_name = document.getElementById("player2_name").value;

    localStorage.setItem("name of player 1", player1_name);
    localStorage.setItem("name of player 2", player2_name);

    window.location.replace("game_page.html");
}  