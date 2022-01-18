let container = document.querySelector('.container');
let dinosuar = document.querySelector('.dinosuar');
let block = document.querySelector('.block');
let cloud = document.querySelector('.cloud');
let score = document.querySelector('#score');
let gameover = document.querySelector('#gameover');


let interval = null;
let playerScore = 0;



// make the function for the score
let scoreCounter= () =>{
    playerScore ++;
    score.innerHTML = `Score <br> ${playerScore}</br>`;

}

//Start the game counter timing
interval = setInterval(scoreCounter, 200);


window.addEventListener("keydown", (start)=>{
    // console.log(start);
    if(start.code == "Space"){
        gameover.style.display = "none";
        block.classList.add("active");
    
        
        //Score
        let playerScore = 0;
        interval = setInterval(scoreCounter,200);
    }
});

window.addEventListener("keydown", (e)=>{
   console.log(e);
    if(e.key == "ArrowUp")
        if(dinosuar.classList != "dinosuarActive"){
            dinosuar.classList.add("dinosuarActive");
            
            setTimeout(()=>{
                dinosuar.classList.remove("dinosuarActive");
            },500);
        }
});

// Block of Gamer Over check if the dinosaur hite the wall

let result  = setInterval(()=>{
    let dinosuarBottom= parseInt(getComputedStyle(dinosuar).getPropertyValue("bottom"));
    console.log("dinosuarBottom "+dinosuarBottom);

    let blockLeft= parseInt(getComputedStyle(block).getPropertyValue("left"));
    console.log("BlockLeft "+blockLeft);

    if(dinosuarBottom <= 90 && blockLeft >= 20 && blockLeft<= 145){
        // console.log("Game Over")
      
        gameover.style.display = "block"
        block.classList.remove("active");
        clearInterval(interval);
    }   
},10);

