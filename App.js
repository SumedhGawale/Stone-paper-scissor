let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score")


const genComputerChoice = () =>{
    const options = ["rock" ,"paper","scissors"];
    const randamIdx = Math.floor(Math.random() * 3);
    return options [randamIdx];
    // rock, paper , scissors
};
const drawGame = () => {
   // console.log("game wad Draw--");
    msg.innerText = " Game was Draw . play again--";

}
const showWinner = (userWin , userChoice ,compChoice) =>{
    if(userWin){
        userScore ++ ;
        userScorePara.innerText = userScore;

        msg.innerText = `you Won your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }else{
        compScore ++;
        compScorePara.innerText = compScore;
    
        msg.innerText = `you Losee ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const palyGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    // to generate computer choice ->modular
    const compChoice = genComputerChoice(); 
    console.log("comp Choice =" , compChoice);

    if(userChoice === compChoice){
    // Drow game
    drawGame ();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors , paper
            userWin = compChoice === "paper" ? false : true ;
        }else if(userChoice === "paper"){
            //rock , scissors
            userWin = compChoice === "scissors" ? false : true;    
        }
        else{
            //rock , papper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner( userWin, userChoice ,compChoice);
    }


};

choices.forEach(choice => {
    console.log(choice);
    choice.addEventListener("click",()=> {
        const userChoice = choice.getAttribute("id");
        palyGame(userChoice);
    })
    
});