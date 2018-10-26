function gameSetUp(){ 
    const gameUserName=document.getElementById("gameUserName");
    const easy=document.getElementById("easy");
    const medium=document.getElementById("medium");
    const hard=document.getElementById("hard");
    const startBtn=document.getElementById("startBtn");


    validateGameSetUp();

    //const checkedValue=document.querySelector(`input[checked]`);

    alert(checkedValue);
}

function validateGameSetUp(){
    const gameUserName=document.getElementById("gameUserName");
    const easy=document.getElementById("easy");
    const medium=document.getElementById("medium");
    const hard=document.getElementById("hard");
    const startBtn=document.getElementById("startBtn");

    function isAllowedToPlay(gUserPermissions,level){
        let i=0;
        while(i<arr.length){
            if(arr[i]===value){
                return true;
            }
            i++;
        }
        return false;
    }
    debugger;

    easy.disabled =true;
    medium.disabled =true;
    hard.disabled =true;
    startBtn.disabled=true;

    //const gUserName=gameServer.gameUser.userName;
    //const gUserPermissions=gameServer.gameUser.allowedToPlay;
    gameUserName.textContent="Guest";
    

    let p=0;

    if(true){//isAllowedToPlay(gUserPermissions,"Easy")
        const parentLi=easy.parentNode;

        easy.checked =true;
        easy.disabled=false;
        parentLi.className="";
        p++;
    }else{
        const parentLi=easy.parentNode;

        easy.checked =false;
        easy.disabled=true;
        parentLi.className="notForGuest";
    }

    if(false){//isAllowedToPlay(gUserPermissions,"Medium")
        const parentLi=medium.parentNode;

        medium.disabled=false;
        parentLi.className="";
        p++;
    }else{
        const parentLi=medium.parentNode;

        medium.checked =false;
        medium.disabled=true;
        parentLi.className="notForGuest";
    }

    if(false){//isAllowedToPlay(gUserPermissions,"Hard")
        const parentLi=hard.parentNode;

        hard.disabled=false;
        parentLi.className="";
        p++;
    }else{
        const parentLi=hard.parentNode;

        hard.checked =false;
        hard.disabled=true;
        parentLi.className="notForGuest";
    }


    if(p>0){
        startBtn.disabled=false;
    }
}//validateGameSetUp()

gameSetUp();