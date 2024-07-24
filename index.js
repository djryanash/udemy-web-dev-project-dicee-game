const player1 = prompt("Who's player 1?", "Player 1")
const player2 = prompt("Who's player 2?", "Player 2")
document.getElementById("player_names").textContent = (player1 + ' vs ' + player2)

function rollTheDice() {
    const dieOne = Math.floor(Math.random() * 6 + 1)
    const dieTwo = Math.floor(Math.random() * 6 + 1)
    
    document.getElementById("die-one").setAttribute("src", "./assets/images/dice" + dieOne + ".png")
    document.getElementById("die-two").setAttribute("src", "./assets/images/dice" + dieTwo + ".png")
    
    if (dieOne === dieTwo) {
        document.getElementById("player_names").textContent = "TIE! Roll again..."
    } else if (dieOne > dieTwo) {
        document.getElementById("player_names").textContent = ("🏆 " + player1 + " wins!!")
        document.getElementById("roll_the_dice").classList.toggle("is-hidden")
        document.getElementById("reload_page_button").classList.toggle("is-hidden")
        
    } else if (dieTwo > dieOne) {
        document.getElementById("player_names").textContent = (player2 + " wins!!" + " 🏆")
        document.getElementById("roll_the_dice").classList.toggle("is-hidden")
        document.getElementById("reload_page_button").classList.toggle("is-hidden")
        
    }
}

function reloadPage() {
    
    location.reload()
    
}

function getDie(num) {
    
    if (num === 1) {
        
    } else if (num === 2) {
        
    } else if (num === 3) {
        
    } else if (num === 4) {
        
    } else if (num === 5) {
        
    } else if (num === 6) {
        
    } 
    
}