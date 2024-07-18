let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");
let newGameBtn = document.querySelector("#new_btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno =true;

const winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("box clicked");
      
        if(turno)
        {
            box.innerText="O";
            turno=false;
            turno;
        }
        else
        {
            box.innerHTML="X";
            turno=true;
        }
      box.disabled =true;

      checkWinner();
    });
});

const disableBoxes = () =>
{
    for(let box of boxes) {
    box.disabled=true;
    }
};


const enableBoxes = () =>
{
    for(let box of boxes) {
    box.disabled=false;
    box.innerText="";
    }
};






const showWinner = (pos1val) =>{
    msg.innerText='Congratulations,Winner is '+pos1val;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}






function checkWinner() {

    for (let pattern of winPattern) {

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;


        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner",pos1val);

                showWinner(pos1val);

            }
        }


    }
};


const reSetGame =() =>{
  turno =true;
  enableBoxes();
msgcontainer.classList.add("hide");
};

newGameBtn.addEventListener("click",reSetGame);
resetBtn.addEventListener("click",reSetGame);