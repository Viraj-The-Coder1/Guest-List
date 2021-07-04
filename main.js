var guests = "";
name_of_guests = [];
function submit(){
    guests = document.getElementById("guestinput").value;
    name_of_guests.push(guests);
    console.log(guests);
    console.log(name_of_guests);
    document.getElementById("showDIV").innerHTML = name_of_guests;
    document.getElementById("guestinput").value ="";
    document.getElementById("showsection").style.display = "inline-block";
}
function show(){
    var verticle = name_of_guests.join("<br>");
    document.getElementById("displayDIV").innerHTML = verticle;
    document.getElementById("searchsection").style.display = "inline-block";
}
function search(){
    var searcher = document.getElementById("searchinput").value;
    var found = 0;
    var s;
    for (s = 0; s < name_of_guests.length; s++){
        if (searcher==name_of_guests[s]){
            found=found+1;
        }
    }
    document.getElementById("searchDIV").innerHTML = "Name Found "+found+" Time/s !!";
    console.log("Name Found "+found+" Time/s !!");
}
