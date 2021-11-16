// function akan(){
//     var radiofemale= document.getElementById("radiofemale");
//     var radiomale = document.getElementById("radiomale");
//     if(radiofemale.checked == true){
//         alert("you are "+ radiofemale.value);
//     } else if (radiomale.checked == true){
//         alert("you are " + radiomale.value);
//     } else {
//         alert("invalid entry enter a gender");
//     }
// }
function akan(){
    var d = new Date();
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value -1;
    var year = document.getElementById("year").value;

    
    if(year <= 0 || year > 2021){
        document.getElementById("yearerror")
        alert("enter correct year!");
    }
    else if(year ==" "){
        document.getElementById("yearerror")
        alert("enter correct values");
    }
    else{
        d.setYear(year);
    }
    

    if(month <= 0 || month > 12){
        document.getElementById("montherror")
        alert("enter correct month!");
    }
    else if(month ==" "){
        document.getElementById("montherror")
        alert("enter correct values");
    }
    else{
        d.setMonth(month);
    }



    if(day <= 0 || day > 31){
        document.getElementById("dayerror")
        alert("enter correct day!");
    }
    else if(day ==" "){
        document.getElementById("dayerror")
        alert("enter correct values");
    }
    else{
        d.setDate(day);
    }


    var dayy = d.getDay();
    var days = ["sunday", "monday", "teusday", "wednesday", "thursday", "friday", "saturday"];
    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var female = ["Akoswa", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


    function getAkan(){
        var ismale = document.getElementById("radiomale").checked;
        var isfemale = document.getElementById("radiofemale").checked;

        if(ismale == true && isfemale == false){

            if(dayy == 0){
                alert("Your Akan name is " +male[0]);
            }
            else if(dayy == 1){
                alert("Your Akan name is " +male[1]);
            }
            else if(dayy == 2){
                alert("Your Akan name is " +male[2]);
            }
            else if(dayy == 3){
                alert("Your Akan name is " +male[3]);
            }
            else if(dayy == 4){
                alert("Your Akan name is " +male[4]);
            }
            else if(dayy == 5){
                alert("Your Akan name is " +male[5]);
            }
            else if(dayy == 6){
                alert("Your Akan name is " +male[6]);
            }
            else{
                alert("enter correct values");
            }

            
        }
        else if(ismale == false && isfemale == true){
            
            if(dayy == 0){
                alert("Your Akan name is " +female[0]);
            }
            else if(dayy == 1){
                alert("Your Akan name is " +female[1]);
            }
            else if(dayy == 2){
                alert("Your Akan name is " +female[2]);
            }
            else if(dayy == 3){
                alert("Your Akan name is " +female[3]);
            }
            else if(dayy == 4){
                alert("Your Akan name is " +female[4]);
            }
            else if(dayy == 5){
                alert("Your Akan name is " +female[5]);
            }
            else if(dayy == 6){
                alert("Your Akan name is " +female[6]);
            }
            else{
                alert("enter correct values");
            }

        }
        else{
            alert("enter correct values");
        }
    }  

    getAkan(); 
}