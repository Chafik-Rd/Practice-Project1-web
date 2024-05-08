function boxShadow(id){
    var x = document.getElementById(id)
    x.style.boxShadow = boxshadow= "-2px 12px 11px 3px rgba(0, 0, 0, 0.25)";
    
}

function boxShadowNomal(id){
    var x = document.getElementById(id)
    x.style.boxShadow = boxshadow= "1px 2px 5px 0px rgba(0, 0, 0, 0.25)";
}


function changeBG(id1,id2){
    var x =document.getElementById(id1);
    var y =document.getElementById(id2);
    x.style.backgroundColor="#4285F4";
    x.style.width="200px";
    y.style.color = "#ffffff";
}
function changeBGNormal(id1,id2){
    var x =document.getElementById(id1);
    var y =document.getElementById(id2);
    x.style.backgroundColor="#ffffff";
    y.style.color = "#000";  
}



