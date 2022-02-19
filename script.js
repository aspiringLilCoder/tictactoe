

// let gameBoard = (function() {
//     // const gameboard_div = document.querySelector("#gameboard")
//     // let _gameboard = [];
//     // squares_divs.forEach(el => {
//     //    _gameboard.push(el);
//     // })

   

    
//     return { clickSquare }
// })();

let game = (function() {
        const squares_divs = document.querySelectorAll(".squares");
        const start = document.querySelector("#start");
        const startMenu = document.querySelector("#startMenu");
        const message = document.querySelector("#message");

        let _content = [];
        let winComb = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
        let currentPlayer = "";
        let playerX;
        let playerO;
        let result = "";
        let num = 0;
        

        let startGame = function() {
            reset();
            message.setAttribute('style','display: none;');
            start.addEventListener("click", () => {
                if (document.querySelector("#playerX").value == "" || document.querySelector("#playerO").value == "") {
                    
                } else {
                    playerX = playerFactory(document.querySelector("#playerX").value, "X");
                    playerO = playerFactory(document.querySelector("#playerO").value, "O");
                    startMenu.setAttribute('style','display: none;');
                    message.setAttribute('style','display: block;');
                    message.textContent = `X: It's ${playerX.name}'s Turn`;
                    currentPlayer = "X";
                    console.log(playerX, playerO);
                }
                
            })
        };

        let clickSquare = (function() {
            return (squares_divs.forEach(el => {
               el.addEventListener("click", () => {
                   if(startMenu.style.display == "none") {
                       console.log("start");
                        if (el.innerHTML != "") {
                            console.log("not empty");
                        } else if(result == "win") {
                            
                        } else if (currentPlayer == "O") {
                            let newImg = document.createElement("img");
                            newImg.classList.add("O");
                            newImg.setAttribute("src", "O.png");
                            el.appendChild(newImg);
                            num++;

                            if (el.classList.contains("Odiv")) {
                                
                            } else {
                                el.classList.add("Odiv");
                            }

                            currentPlayer = "X";
                            message.textContent = `X: It's ${playerX.name}'s Turn`;


                            checkContent()
                            checkWinner("O");
                            isItDraw();
                            console.log("?");

                            if (result == "win") {
                                console.log("win");
                                message.textContent = `X:  ${playerO.name} HAS WON!`;
                            } 


                            


                        } else {
                            let newImg = document.createElement("img");
                            newImg.classList.add("X");
                            newImg.setAttribute("src", "X.png");
                            el.appendChild(newImg);
                            num++;

                            if (el.classList.contains("Xdiv")) {
                                
                            } else {
                                el.classList.add("Xdiv");
                            }

                            currentPlayer = "O";
                            message.textContent = `O: It's ${playerO.name}'s Turn`;

                            checkContent()
                            checkWinner("X");
                            isItDraw();
                            console.log("?");
                            if (result == "win") {
                                console.log("win");
                                message.textContent = `O:  ${playerX.name} HAS WON!`;
                            }

                        }
                   } 
               })
            }))
           })
        let checkContent = function() {
            _content = [];
            squares_divs.forEach(el => {
                    if ((el.getAttribute("class")).includes("Odiv")) {
                        _content.push("O");
                    } else if((el.getAttribute("class")).includes("Xdiv")) {
                        _content.push("X");
                    } else {
                        _content.push("");
                    }
            })
            console.log(_content);
        }

        const playerFactory = (name, marker) => {
            return {name, marker}
        }
        // let winComb = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

        const checkWinner = function(marker) {
            winComb.forEach(el => {
                let consequent = [];

                for (let i = 0; i < el.length; i++) {
                    const index = el[i];
                    if (_content[index] == marker) {
                        consequent.push(marker);
                        if (consequent.length == 3) {
                            console.log("win");
                            result = "win";
                        }
                    } else {
                        consequent = [];
                    }
                }
                
            })
        }

        const reset = function() {
            squares_divs.forEach(el => {
                el.classList.remove('X');
                el.classList.remove('O');
        })
        }
        
        const restart = function() {
            
            document.querySelector("#restart").addEventListener("click", () => {
                num = 0;
                squares_divs.forEach(el => {
                    el.innerHTML = "";
                    el.classList.remove("Odiv")
                    el.classList.remove("Xdiv")
                })
                reset()
                _content = [];
                currentPlayer = "";
                result = "";
                startMenu.setAttribute('style','display: block;');
                message.setAttribute('style','display: none;');
                document.querySelector("#playerX").value = "";
                document.querySelector("#playerO").value = "";
            });
            
        }

        const isItDraw = function() {
            console.log(num);
            if (num == 9 && result == "") {
                result = "draw";
                console.log("draw");
                message.textContent = "It's a draw";
            }
        }

        

        return { checkContent, startGame, currentPlayer, clickSquare, checkWinner, restart}
    })()


game.startGame();
game.clickSquare();
game.restart();

// game.checkContent()

