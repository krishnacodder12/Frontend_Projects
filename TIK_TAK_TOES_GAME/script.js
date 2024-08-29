    const boxes = document.querySelectorAll(".row .box");

    reset = document.getElementById("reset")
    //console.log(boxes);
    res = document.getElementById;ementById("result")
    const x_arr=[0,0,0,
            0,0,0,
            0,0,0];

    const o_arr=[0,0,0,
        0,0,0,
        0,0,0];



    chance = "X";

    for(let i=0;i<boxes.length;i++){
        boxes[i].addEventListener("click",function(e) {
            // same code if we write here, then automatically the line no 26 will not run after the win.
            if((x_arr[0]==1 && x_arr[1] ==1 && x_arr[2] ==1) || (x_arr[3] ==1 && x_arr[4] ==1 && x_arr[5] ==1) ||(x_arr[6] ==1 && x_arr[7] ==7 && x_arr[8] ==1) || (x_arr[0] ==1 && x_arr[3]==1 && x_arr[6]==1) || (x_arr[1] ==1 && x_arr[4] ==1 && x_arr ==7) || (x_arr[2] ==1 && x_arr==[5] ==1 && x_arr[8] ==1)|| (x_arr[0] ==1 && x_arr[4] ==1 && x_arr[8] ==1) (x_arr[2] ==1 && x_arr[4] ==1 && x_arr[6] ==1)){
                result.innerHTML = "Player X Wins";
            }
            else if((o_arr[0]==1 && o_arr[1] ==1 && o_arr[2] ==1) || (o_arr[3] ==1 && o_arr[4] ==1 && o_arr[5] ==1) ||(o_arr[6] ==1 && o_arr[7] ==7 && o_arr[8] ==1) || (o_arr[0] ==1 && o_arr[3]==1 && o_arr[6]==1) || (o_arr[1] ==1 && o_arr[4] ==1 && o_arr ==7) || (o_arr[2] ==1 && o_arr==[5] ==1 && o_arr[8] ==1)|| (o_arr[0] ==1 && o_arr[4] ==1 && o_arr[8] ==1) (o_arr[2] ==1 && o_arr[4] ==1 && o_arr[6] ==1)){
                result.innerHTML = "Player O Wins";
            }
            else if (chance==="X" && x_arr[i]==0 && o_arr[i]==0) {
                const new_p = document.createElement("p");// <p> </p>
                new_p.textContent = "X"; //<p>X</p>
                e.target.appendChild(new_p); //<div><p>X</p></div>
                chance = "O";

                x_arr[i] = 1;//now box is filled

            }
            else if(chance==="O" && x_arr[i]==0 && o_arr[i]==0 ){
                const new_p = document.createElement("p");
                new_p.textContent = "O";
                e.target.appendChild(new_p);

                chance = "X";
                o_arr[i] = 1;
    }
    if((x_arr[0]==1 && x_arr[1] ==1 && x_arr[2] ==1) || (x_arr[3] ==1 && x_arr[4] ==1 && x_arr[5] ==1) ||(x_arr[6] ==1 && x_arr[7] ==7 && x_arr[8] ==1) || (x_arr[0] ==1 && x_arr[3]==1 && x_arr[6]==1) || (x_arr[1] ==1 && x_arr[4] ==1 && x_arr ==7) || (x_arr[2] ==1 && x_arr==[5] ==1 && x_arr[8] ==1)|| (x_arr[0] ==1 && x_arr[4] ==1 && x_arr[8] ==1) (x_arr[2] ==1 && x_arr[4] ==1 && x_arr[6] ==1)){
        result.innerHTML = "Player X Wins";
    }
    if((o_arr[0]==1 && o_arr[1] ==1 && o_arr[2] ==1) || (o_arr[3] ==1 && o_arr[4] ==1 && o_arr[5] ==1) ||(o_arr[6] ==1 && o_arr[7] ==7 && o_arr[8] ==1) || (o_arr[0] ==1 && o_arr[3]==1 && o_arr[6]==1) || (o_arr[1] ==1 && o_arr[4] ==1 && o_arr ==7) || (o_arr[2] ==1 && o_arr==[5] ==1 && o_arr[8] ==1)|| (o_arr[0] ==1 && o_arr[4] ==1 && o_arr[8] ==1) (o_arr[2] ==1 && o_arr[4] ==1 && o_arr[6] ==1)){
        result.innerHTML = "Player O Wins";
    }
    else{
            count = 0;
            for (let i=0; i<x_arr.length; i++){
                if (x_arr[i]==1 || o_arr[i]==1){
                    count = count+1;
                } 
            }
            if (count==9){
                res.innerHTML = "Match Draw";
            }
    }
    });
    }

    reset.addEventListener("click", function(){
        window.location,reload();
    });