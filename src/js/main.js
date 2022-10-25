let clicks = 0;

function  reloadCSS() {
        if (clicks==0){
             clicks++;
        }else (clicks==1)
        {
           alert("F")
                clicks=0;
        }



        var links = document.getElementsByClassName("chat-sendmsg");
        for (var cl in links)
        {
                var link = links[cl];
                if (link.rel === "stylesheet")
                        link.href += "";
        }

        
}
