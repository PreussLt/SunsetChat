async function empfangePM(roomId, userName) {
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

    }
    //alert("0 "+myArray[0][0]+" 1: "+myArray[0][1]+" 2: "+myArray[0][2]+" 3:"+myArray[0][3]+" 4: "+myArray[0][4]+" 5: "+myArray[0][0]);

    const rArray = myArray.reverse();
    document.cookie = "lm="+rArray[0][0]+"; path=/";
    for (let y =0; y< rArray.length;y++){
        if (myArray[y][4]==user || myArray[y][2]==user && myArray[y][4]!="RickAsley42"){
        if (myArray[y][2]===user){
            document.getElementById("room1_box").innerHTML += "<h5> Nachricht an: " + myArray[y][4] + ":</h5>";
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
        }// End if User = User
    }


}