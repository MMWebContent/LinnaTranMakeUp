function submit_order(){

  //define variables
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var textarea = document.getElementById('message').value;
      
  var namepatt = /^[a-z]+$/i;    
  var emailpatt = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
  var phonepatt = /^(([0-9]{10}))$/;

      
  //if String pattern doesn't match RegEx
      
  if(!namepatt.test(name)){ //WORKING
  document.getElementById("namealert").className = "alert alert-danger";    
  document.getElementById("namealertstrong").innerHTML = "Please enter a valid name.";

  return false;
  }  
  else if(!emailpatt.test(email)){ //WORKING
    
  document.getElementById("emailalert").className = "alert alert-danger";    
  document.getElementById("emailalertstrong").innerHTML = "Please enter a valid email.";

  return false;    
  }      
  else if(!phonepatt.test(phone))
  {   
  document.getElementById("phonealert").className = "alert alert-danger";    
  document.getElementById("phonealertstrong").innerHTML = "Please enter a valid phone number";    
  return false;    
  } 
  //submit form    
  else{
  return true;
  }
  return false;
}

//alert under input zone for name
function changenamealert(){    
var name = document.getElementById('name').value;    
var namepatt = /^[a-z]+$/i;   
    
if(!namepatt.test(name)){
    
document.getElementById("namealert").className = "alert alert-danger";    
document.getElementById("namealertstrong").innerHTML = "invalid name";
}
else{
document.getElementById("namealert").className = "alert alert-success";    
document.getElementById("namealertstrong").innerHTML = "&#x2713 verified";
}    
}

function changeemailalert(){
    
var email = document.getElementById('email').value;    
var emailpatt = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;   
    
if(!emailpatt.test(email)){
    
document.getElementById("emailalert").className = "alert alert-danger";    
document.getElementById("emailalertstrong").innerHTML = "invalid email";
}
else{
document.getElementById("emailalert").className = "alert alert-success";    
document.getElementById("emailalertstrong").innerHTML = "&#x2713 verified";
}    
}


function changephonealert(){
    
var phone = document.getElementById('phone').value;    
var phonepatt = /^(([0-9]{10}))$/;   
    
if(!phonepatt.test(phone)){
    
document.getElementById("phonealert").className = "alert alert-danger";    
document.getElementById("phonealertstrong").innerHTML = "Please enter a valid phone number";
}
else{
document.getElementById("phonealert").className = "alert alert-success";    
document.getElementById("phonealertstrong").innerHTML = "&#x2713 verified";
}    
}

function SubmissionSuccess(){
    if(submit_order()){
        ReloadPage()
    }
}

function ReloadPage()
{
    alert("Your message was successfully sent!");
    location.reload();
}
