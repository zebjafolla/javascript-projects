const score = require('../RPS.js')
describe("tests rocks paper scissors", function(){
    test("tests if rocks will beat scissors", function(){
        let result = score("rock", "scissors");
        expect(result).toBe("Player 1 wins!");
    });
    test("tests if scisscors will beat paper", function(){
        let result = score("scissors", "paper");
        expect(result).toBe("Player 1 wins!");
    });
    test("tests if paper will beat rock", function(){
        let result = score("paper", "rock");
        expect(result).toBe("Player 1 wins!");
    });
    test("if player one and player two throw the same choich, test checks if program returns 'tie!'", function(){
        let result = score("rock", "rock");
        expect(result).toBe("TIE!");
    });
    test("if player 1 or player 2 do not answer with 'rock' 'paper' or 'scissors'", function(){
        let result = score("rack", "paper");
        expect(result).toBe("Players must enter 'rock', 'paper', or 'scissors'. Please try again!");
    });
    
    

    
});