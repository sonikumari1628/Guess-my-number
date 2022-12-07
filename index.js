const correctNum = Math.floor(Math.random()*20)+1;
let corEl= document.getElementById("correct")
let count = 20;
let countNum = document.getElementById("count")
let totalNum = document.getElementById("total")
let sentenceNum = document.getElementById("sentence")
let checkNum = document.getElementById("check")


    checkNum.addEventListener("click",function(){
        let numberNum = document.getElementById("number").value;
        if(numberNum == correctNum){
            sentenceNum.textContent = "Yahhhhh You won It!"
            corEl.textContent = correctNum;
            totalNum.textContent = count;
            document.querySelector('body').style.backgroundColor = 'greenyellow';
            document.querySelector('sentence').style.color = '#000000';
        } 

        else if(numberNum > correctNum ){
            if(count > 0){
                sentenceNum.textContent = "too high...."
                count --;
            countNum.textContent = count;    
            }
        else {
            sentenceNum.textContent = "You lost the game.."
        }

        }
        else if(numberNum < correctNum){
            if(count > 0){
            sentenceNum.textContent = "too low...."
            count --;
            countNum.textContent = count;
            }
            else{
                sentenceNum.textContent = "You lost the game.."
            }
        }
    })