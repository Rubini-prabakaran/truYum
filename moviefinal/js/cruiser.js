function validateForm()
{
var title=document.forms["editMovieItem"]["title"].value;
if(title=="")
{
    alert("Title is required");
    return false;
}
var titlelength=title.length;
if(titlelength < 2||titlelength >65)
{
    alert("Name should have 2 to 65 characters");
    return false;
}
var gross=document.forms["editMovieItem"]["gross"].value;
if(isNaN(gross)){
    alert("Box Office has to be a number");
    return false;
}
if(gross=="")
{
    alert("Box Office is required");
    return false;
}
var dateOfLaunch=document.forms["editMovieItem"]["dateOfLaunch"].value;
if(dateOfLaunch==""){
alert("Date of launch is required");
return false;
}
if(!dateOfLaunch.match(/^(0[1-9]|[12][0-9]|3[01])[\-\/.](?:(0[1-9]|1[012])[\-\/.](19|20)[0-9]{2})$/)){
  alert("Incorrect date format. Expected format(dd/mm/yyyy)");
  return false;
}
}
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    var x = document.getElementById("table_id").deleteRow(i);
    document.getElementById("span").innerHTML="Movies removed from Favourites successfully";

    addColumn();
  }

function addColumn(){

    var count=0;
    var table = document.getElementById("table_id");
    if(table.rows.length==2){
        window.open("favorites-empty.html");
    }
    for (var i = 2; i <=table.rows.length-1; i++){
        
        
       count++;

       
    }
    document.getElementById("val").innerHTML=count;
}