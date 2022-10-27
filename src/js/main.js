

function setReload(){
    document.getElementById("checkbox").setAttribute("onclick","reloadCSS(getCookie('user'))");

}
function  reloadCSS(user) {
    try {
        var text =document.getElementById('text_input').value;
        sendeDaten(text,user);
        alert("Nachricht wurde gesendet: "+text);
        document.cookie = "restBtn=true; path=/";
    }catch (err){
        alert("Fehler im reloadCss: "+err);
    }

}


async function empfangeDaten(roomId, userName) {
    const user = userName;
    const link = "https://chat.web2021.dhbw.scytec.de/room/"+roomId+"/messages";
    let myObject =  await fetch(link);
    let myText =  await myObject.text();
    //document.getElementById("demo").innerHTML = myText;
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
            }else if(myArray[y-1][2]!=myArray[y][2]){
                document.getElementById("room1_box").innerHTML += "<h4>" + myArray[y][2] + ":</h4>";
            }

            document.getElementById("room1_box").innerHTML += "<div class=\"chat-fm\">"+myArray[y][3]+"</div>";
        }
    }


}
async function sendeDaten(data,user){

    let myObject =  await fetch("https://chat.web2021.dhbw.scytec.de/room/1/messages",
        {
            method: 'POST',
            body: JSON.stringify({
                "sender": user,
                "text": data,
                "data": "optionale Daten",
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

