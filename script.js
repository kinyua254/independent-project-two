// function akan(){
//     var d = new day()

//     var day = parseInt(document.getElementById("day").value);
//     var month = parseInt(document.getElementById("month").value);
//     var year = parseInt(document.getElementById("year").value);

//     if(day < 0 || day > 31){
//         document.getElementById("dayerror");
//         alert("invalid day input.Try again");
//     } else if (day === ""){
//         document.getElementById("dayerror");
//         alert("day is required");
//     } else {
//         d.setDay(day);
//     }

//     if (month < 0 || month > 12){
//         document.getElementByid("montherror");
//         alert("invalid month input.Try again");
//     } else if(month === ""){
//         document.getElementByid("montherror");
//         alert("field is required");
//     } else {
//         d.setMonth(month);
//     }
// }


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
// function akan(){

//     const day = parseInt(document.getDocumentById("day"));
//     const month = parseInt(document.getElementById("month"));
//     const year = parseInt(document.getElementById("year"));

//     if(day.value ==="" && day.value === null){
//         document.getElementById("dayerror")
//         return false;
//     } else if (day.value <0 || day.value > 31){
//         document.getElementById("dayerror");
//         return false;
//     } else {

//     }

//     if (month.value === "" && month.value ===null){
//         document.getElementById("montherror");
//         return false;
//     } else if (month.value < 0 || month.value > 12){
//         document.getElementById("montherror");
//         return false;
//     } else{

//     }

//     if (year.value === "" && year.value < 0){
//         document.getElementById("year");
//         return false;
//     } else {

//     }

//     var days = ["sunday" , "monday" , "tuesday" , "wednesday" , "thursday" , "firday", "saturday"];
//     var male = ["kwasi", "kwadwo" , "kwabena" , "kwaku" , "yaw" , "kofi" , "kwame"];
//     var female = ["akosua" , "adwoa" , "abeena" , "akua" , "yaa", "afua" , "ana"];

//     function gender(){
//         var isMale = (document.getElementById("radiomale").checked);
//         var isFemale = (document.getElementById("radiomale")).checked;
//         if (isMale == true && isFemale == false){
//             if(day == 0){
//                 alert("your name is " + male[0]);
//             } else if (day == 1){
//                 alert("your name is " + male[1] );
//             } else if (day == 2){
//                 alert("your name is " + male [2]);
//             } else if (day == 3){
//                 alert("your name is " + male[3]);
//             } else if (day == 4){
//                 alert("your name is " + male[4]);
//             } else if (day == 5){
//                 alert("your name is " + male [5]);
//             }else if (day == 6){
//                 alert("your name is " + male[6]);
//             }
//         }else if (isMale == false && isFemale == true){
//             if (day == 0){
//                 alert("your name is " + female[0]);
//             } else if (day == 1){
//                 alert("your name is " + female[1]);
//             } else if (day == 2){
//                 alert("your name is " + female[2]);
//             } else if (day == 3){
//                 alert("your name is " + female[3]);
//             } else if (day == 4){
//                 alert("your name is " + female[4]);
//             } else if (day == 5){
//                 alert("your name is " + female[5]);
//             } else if (day == 6){
//                 alert ("your name is " + female[6]);
//             }
//         } else {
//             return false;
//         }
//     }
// }
// akan()

// other code

// var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "firday", "saturday"];
// var male = ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame"];
// var female = ["akosua", "adwoa", "abeena", "akua", "yaa", "afua", "ana"];

// function validateForm() {
//     var gender = document.getElementsByName("gender");
//     var day = document.getElementById("day");
//     var month = document.getElementById("month");
//     var year = document.getElementById("year");
//     var formValid = false;
//     var i = 0;
//     document.getElementById("result").innerHTML = "";
//     if (day.value == "" || day.value == null) {

//         document.getElementById("result").innerHTML += "Day is Required";
//         return false;
//     } else {
//         if (!isNaN(day.value)) {
//             if (day.value <= 0 || day.value > 31) {
//                 document.getElementById("result").innerHTML += "Invalid Day";
//                 return false;
//             }
//         } else {
//             document.getElementById("result").innerHTML += "Day must be a number";
//             return false;
//         }
//     }
//     if (month.value == "" || month.value == null) {
//         document.getElementById("result").innerHTML += "Month is Required";
//         return false;
//     } else {
//         if (!isNaN(month.value)) {
//             if (month.value <= 0 || month.value > 12) {
//                 document.getElementById("result").innerHTML += "Invalid Month";
//                 return false;
//             }
//         } else {
//             document.getElementById("result").innerHTML += "Month must be a number";
//             return false;
//         }
//     }
//     if (year.value == "" || year.value == null) {
//         document.getElementById("result").innerHTML += "Year is Required";
//         return false;
//     } else {
//         if (!isNaN(year.value)) {
//             if (year.value.length != 4) {
//                 document.getElementById("result").innerHTML += "Invalid Year";
//                 return false;
//             }
//         } else {
//             document.getElementById("result").innerHTML += "Year must be a number";
//             return false;
//         }
//     }

//     while (!formValid && i < gender.length) {
//         if (gender[i].checked)
//             formValid = true;
//         i++;
//     }
//     return formValid;

// }
// function getUserDetails() {
//     var day = parseInt(document.getElementById("day").value);
//     var month = parseInt(document.getElementById("month").value);
//     var year = parseInt(document.getElementById("year").value);
//     var gender = document.getElementsByName("gender");

//     for (var i = 0; i < gender.length; i++) {
//         if (gender[i].checked)
//             var gendervalue = gender[i].value;
//     }

//     var userDetails = {
//         day: day,
//         month: month,
//         year: year,
//         myGenderValue: gendervalue,

//     }


//     return userDetails;

// }
// function aggregateFunctions() {
//     var formValid = validateForm();

//     if (!formValid) {
//         validateForm();
//         return false;
//     } {
//         getUserDetails();
//         verifyUserBirthday();
//         findUserAkanName();
//         printUserAkanName();
//         return false;

//     }
// }
// function verifyUserBirthday() {
//     var userDetailsObject = getUserDetails();
//     days = userDetailsObject.day;
//     month = userDetailsObject.month;
//     year = userDetailsObject.year;

//     var a = Math.floor((14 - month) / 12);
//     var y = year - a;
//     var m = month + 12 * a - 2;
//     dayOfWeek = (day + y + Math.floor(y / 4) - Math.floor(y / 100) +
//         Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;

//     return dayOfWeek;

// }
// function findUserAkanName() {
//     var userDetailsObject = getUserDetails();
//     mGender = userDetailsObject.myGenderValue;
//     userWeekDayIndex = verifyUserBirthday();


//     var dayOfTheWeek = weekDayArray[userWeekDayIndex];

//     if (mGender === "male") {

//         var akanArrayObject = akanArray[0];

//         for (var key in akanArrayObject) {
//             if (akanArrayObject.hasOwnProperty(key)) {
//                 if (key === dayOfTheWeek) {
//                     akanName = akanArrayObject[key];
//                 }
//             }
//         }
//     } else if (mGender === "female") {
//         var akanArrayObject = akanArray[1];

//         for (var key in akanArrayObject) {
//             if (akanArrayObject.hasOwnProperty(key)) {
//                 if (key === dayOfTheWeek) {
//                     akanName = akanArrayObject[key];
//                 }
//             }
//         }

//     } else {
//         alert("Error occured!");
//     }

//     var importantDetails = {
//         akanName: akanName,
//         dayOfTheWeek: dayOfTheWeek,
//         mGender: mGender


//     }
//     return importantDetails;

// }
// function printUserAkanName() {
//     clearInterval(changeBackgroundColor);
//     var akanDetails = findUserAkanName();
//     akanName = akanDetails.akanName;
//     dayOfTheWeek = akanDetails.dayOfTheWeek;
//     mGender = akanDetails.mGender;

//     document.getElementById("nameakan").innerHTML = "Hurray! We found it.Your Akan name is  " + akanName;
//     document.getElementById("conclusion").innerHTML = 'Since, You are a ' + mGender + ' born on ' + dayOfTheWeek;


// }

// function refresh() {
//     window.location.reload();
// }

