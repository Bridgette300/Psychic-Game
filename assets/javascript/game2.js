document.addEventListener("DOMContentLoaded", function(event) { 

    // create an array that consists of all the letters in the alphabet
    
        let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let timer;
        let win = 0;
        let lose = 0;
        let computerGuess;
        let keyPress;
        let remainingGuesses = [];

        
     
        
        let elWinPoints = document.getElementById('win-point');
        let elLosePoints = document.getElementById('lose-point');
        let elGuessLeft = document.getElementById('guesses-left');
        let elGuessSoFar = document.getElementById('guessesSoFar');

        
       
        
        function startGame () {
            timer = 9;
            remainingGuesses = [];
           
            //computer produces a random letter everytime a key is pressed
            computerGuess =  letters[Math.floor(Math.random() * letters.length)];
            
            elGuessLeft.textContent = timer;
            elGuessSoFar.appendChild.remainingGuesses;
            
            
        }
        
       
        startGame();

                      
    
        //event occurs when a key is pressed
        document.onkeyup = function(event) {
    
            //store key press in variable
            keyPress = event.key;


          
            
            
            if (keyPress === computerGuess) {
                
                console.log(keyPress + " Yeah, baby you guess the right letter");
                win++;
                elWinPoints.textContent = win;
               
                startGame();
               

             } else {
                console.log(keyPress + " Damn, wrong one. Try again hun!")
    
                //print out the text of the letter in this new span I created
                let newLetter = ' ' + keyPress;
                //push user guess to array
                remainingGuesses.push(newLetter);
                elGuessSoFar.textContent = remainingGuesses;
                timer--;
                elGuessLeft.textContent = timer;
            } 
            
            if (timer === 0) { 
                remainingGuesses.length = 0;
                lose++;           
                elLosePoints.textContent = lose;
                startGame(); 
            }
                
             
    
            return true;
        
    
          
          };
       
    // make sure the strings of the array are equal to the keyboard presses
    
    
    

        
    });