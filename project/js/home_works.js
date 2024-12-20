//GMAIL BLOCK

const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^[a-z0-9._-]+@gmail\.com$/i

gmailButton.onclick = () =>{
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"
    }else{
        gmailResult.innerHTML = "Invalid email address"
        gmailResult.style.color = "red"
    }
}

//MOVE BLOCK

const childBlock = document.querySelector(".child_block");
const parentBlock = document.querySelector("#parent_child");

let positionX = 0, positionY = 0;


const moveBlock = () =>{
   if(positionX <= 445 && positionY === 0){
        positionX++
       childBlock.style.left = positionX + 'px'
       setTimeout(moveBlock, 0)
   }else if (positionY <= 445 && positionX > 445){
       positionY++
       childBlock.style.top = positionY + 'px'
       setTimeout(moveBlock, 0)
   }else if(positionX >= 0){
       positionX--
       childBlock.style.left = positionX + 'px'
       setTimeout(moveBlock, 0)
   }else if(positionY >= 0){
       positionY--
       childBlock.style.top = positionY + 'px'
       setTimeout(moveBlock, 0)
   }

}
moveBlock();

//TIMER
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
const seconds = document.querySelector('#seconds')
let timerCounter = 0
let switcherTimer = true
start.onclick = () => {
    if (switcherTimer === true){
        const timerId = setInterval(() => {
            if (timerCounter <= 999){
                timerCounter++
                seconds.innerText = timerCounter
            }
        }, 100)
        stop.onclick = () => {
            clearInterval(timerId)
            switcherTimer = true
        }

        reset.onclick = () => {
            timerCounter =0
            seconds.innerText = 0
        }
        switcherTimer = false
    }


}



