function akan(){
    var radiofemale= document.getElementById("radiofemale");
    var radiomale = document.getElementById("radiomale");
    if(radiofemale.checked == true){
        alert("you are "+ radiofemale.value);
    } else if (radiomale.checked == true){
        alert("you are " + radiomale.value);
    } else {
        alert("invalid entry enter a gender");
    }
}