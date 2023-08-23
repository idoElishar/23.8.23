// ENUM שמייצג את הבחירות האפשריות במשחק
enum GameChoice {
    Rock = "Rock",
    Paper = "Paper",
    Scissors = "Scissors"
}

// ENUM שמייצג את התוצאות האפשריות
enum GameResult {
    Tie = "tie",
    Player1 = "player1",
    Player2 = "player2",
}

// פונקציה שמחזירה את התוצאה של המשחק
function playGame(player1: GameChoice, player2: GameChoice): GameResult {
    if (player1 === player2) {
        return GameResult.Tie;
    }

    if (
        (player1 === GameChoice.Rock && player2 === GameChoice.Scissors) ||
        (player1 === GameChoice.Paper && player2 === GameChoice.Rock) ||
        (player1 === GameChoice.Scissors && player2 === GameChoice.Paper)
    ) {
        return GameResult.Player1;
    }

    return GameResult.Player2;
}

// בחירת השחקנים
const player1: GameChoice = GameChoice.Rock; // ניתן לשנות בין Rock, Paper, Scissors
const player2: GameChoice = GameChoice.Paper; // ניתן לשנות בין Rock, Paper, Scissors

// הרצת המשחק
const play: GameResult = playGame(player1, player2);

console.log(play);