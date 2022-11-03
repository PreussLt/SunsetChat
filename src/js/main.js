

function setReload(roomId){
    document.getElementById("checkbox").setAttribute("onclick","reloadCSS(getCookie('user'),"+roomId+")");

}
function  reloadCSS(user,roomId) {
    try {
        var text =document.getElementById('text_input').value;
        if (roomId==42){
           ziel = prompt("Wer soll die PM Erhalten?");
        }else {
            ziel = "RickAsley42";
        }
        sendeDaten(text,user,ziel,roomId);
        alert("Nachricht wurde gesendet: "+text);
        document.cookie = "restBtn"+roomId+"=true; path=/";
    }catch (err){
        alert("Fehler im reloadCss: "+err);
    }

}


async function empfangeDaten(roomId, userName) {
    const user = userName;
    const link = "https://chat.web2021.dhbw.scytec.de/room/"+roomId+"/messages";
    let myObject =  await fetch(link);
    let myText ="";
    myText =  await myObject.text()
        .then(ausgabe(myText));
    //document.getElementById("demo").innerHTML = myText;
    /*
    const myArray = myText.split("},{");
    for (let i=0; i<myArray.length;i++){
        myArray[i] = myArray[i].replaceAll("{","");
        myArray[i] = myArray[i].replaceAll("[","");
        myArray[i] = myArray[i].replaceAll("]","");
        myArray[i] = myArray[i].replaceAll("\"","");
        myArray[i] = myArray[i].split(",");
        for (let y =0;y<myArray[i].length;y++){
            let arr = myArray[i][y].split(":");
             myArray[i][y] = arr[1];
        }


        if (myArray[i][2]==user){
            document.getElementById("room1_box").innerHTML += "<div class=\"chat-om\">"+myArray[i][3]+"</div>";
        }else {
            if (i==0){
                document.getElementById("room1_box").innerHTML += "<h4>" + myArray[i][2] + ":</h4>";
            }else if(myArray[i-1][2]!=myArray[i][2]){
                document.getElementById("room1_box").innerHTML += "<h4>" + myArray[i][2] + ":</h4>";
            }

            document.getElementById("room1_box").innerHTML += "<div class=\"chat-fm\">"+myArray[i][3]+"</div>";
        }


    }

   const rArray = myArray.reverse();
    document.cookie = "lm="+rArray[0][0]+"; path=/";
    for (let y =0; y< rArray.length;y++){
        if (myArray[y][2]==user){
            document.getElementById("room1_box").innerHTML += "<div class=\"chat-om\">"+myArray[y][3]+"</div>";
        }else {
            if (y==0){
                document.getElementById("room1_box").innerHTML += "<h4>" + myArray[y][2] + ":</h4>";
                document.getElementById("room1_box").innerHTML += "<div id='firstMsg' class=\"chat-fm\">"+myArray[y][3]+"</div>";
            }else if(myArray[y-1][2]!=myArray[y][2]){
                document.getElementById("room1_box").innerHTML += "<h4>" + myArray[y][2] + ":</h4>";
                document.getElementById("room1_box").innerHTML += "<div class=\"chat-fm\">"+myArray[y][3]+"</div>";
            }

        }
    }// Ende Text Ausgabe

    */
}
function ausgabe(myText){
    const myArray = myText.split("},{");
    for (let i=0; i<myArray.length;i++){
        myArray[i] = myArray[i].replaceAll("{","");
        myArray[i] = myArray[i].replaceAll("[","");
        myArray[i] = myArray[i].replaceAll("]","");
        myArray[i] = myArray[i].replaceAll("\"","");
        myArray[i] = myArray[i].split(",");
        for (let y =0;y<myArray[i].length;y++){
            let arr = myArray[i][y].split(":");
            myArray[i][y] = arr[1];
        }

        /*
        if (myArray[i][2]==user){
            document.getElementById("room1_box").innerHTML += "<div class=\"chat-om\">"+myArray[i][3]+"</div>";
        }else {
            if (i==0){
                document.getElementById("room1_box").innerHTML += "<h4>" + myArray[i][2] + ":</h4>";
            }else if(myArray[i-1][2]!=myArray[i][2]){
                document.getElementById("room1_box").innerHTML += "<h4>" + myArray[i][2] + ":</h4>";
            }

            document.getElementById("room1_box").innerHTML += "<div class=\"chat-fm\">"+myArray[i][3]+"</div>";
        }

        */
    }

    const rArray = myArray.reverse();
    document.cookie = "lm="+rArray[0][0]+"; path=/";
    for (let y =0; y< rArray.length;y++){
        if (myArray[y][2]==user){
            document.getElementById("room1_box").innerHTML += "<div class=\"chat-om\">"+myArray[y][3]+"</div>";
        }else {
            if (y==0){
                document.getElementById("room1_box").innerHTML += "<h4>" + myArray[y][2] + ":</h4>";
                document.getElementById("room1_box").innerHTML += "<div id='firstMsg' class=\"chat-fm\">"+myArray[y][3]+"</div>";
            }else if(myArray[y-1][2]!=myArray[y][2]){
                document.getElementById("room1_box").innerHTML += "<h4>" + myArray[y][2] + ":</h4>";
                document.getElementById("room1_box").innerHTML += "<div class=\"chat-fm\">"+myArray[y][3]+"</div>";
            }

        }
    }// Ende Text Ausgabe
    return "true";

}
async function sendeDaten(data,user,ziel,roomID){

    let myObject =  await fetch("https://chat.web2021.dhbw.scytec.de/room/"+roomID+"/messages",
        {
            method: 'POST',
            body: JSON.stringify({
                "sender": user,
                "text": data,
                "data": ziel,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(function(res){ return res.json(); })
        .then(function(data){ console.log( JSON.stringify( data ) ) })

    //let myObject =  await fetch("https://chat.web2021.dhbw.scytec.de/room/2/messages");
    //let myText =  await myObject.text();

}

function login(a){
    if (a==""){
        alert("Kein Logon");
        return "anonymus";
    }else {
        return a;
    }
}

function splitArray(myArray){
    try {
        for (let i=0; i<myArray.length;i++){
            myArray[i] = myArray[i].replaceAll("{","");
            myArray[i] = myArray[i].replaceAll("[","");
            myArray[i] = myArray[i].replaceAll("]","");
            myArray[i] = myArray[i].replaceAll("\"","");
            myArray[i] = myArray[i].split(",");
            for (let y =0;y<myArray[i].length;y++){
                let arr = myArray[i][y].split(":");
                myArray[i][y] = arr[1];
            }// End For y
        }// End For i
        const rArray = myArray.reverse();
        return rArray;
    }catch (err){
        console.log("Fehler "+err);
        return null;
    }
}

