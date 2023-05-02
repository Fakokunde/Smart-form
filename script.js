function handleClick(){

   var namePattern = /[a-z]{3,}/i

   //bammiedee48@gmail.com
   var emailPattern = /[\w]{2,}\@[a-z]{3,}\.[a-z]{2,}/i
//+2348142314897
var phonePattern = /\+[\d]+[\d]{7,12}/i
//2virus-founD
var pwdPattern = /[\w]{5,}[\W]?[a-z]+[A-Z]+/


   var fname = document.getElementById("fname").value
   var lname = document.getElementById("lname").value
   var email = document.getElementById("email").value
   var phone = document.getElementById("phone").value
   var password = document.getElementById("pwd").value

   if(fname === "" || lname === "" || email === "" || phone === "" || password === ""){
      document.getElementById("notification").style.display = "flex"
      document.getElementById("notification").style.backgroundColor = "red"
      document.getElementById("text").innerText = "input field cannot be empty"

   }else if(!namePattern.test(fname) || !namePattern.test(lname)){
      document.getElementById("notification").style.display = "flex"
      document.getElementById("notification").style.backgroundColor = "yellow"
      document.getElementById("text").innerText = "enter valid name"

    }else if(!emailPattern.test(email)){
    document.getElementById("notification").style.display = "flex"
    document.getElementById("notification").style.backgroundColor = "yellow"
    document.getElementById("text").innerText = "enter a valid email address"

   }else if(!phonePattern.test(phone)){
   document.getElementById("notification").style.display = "flex"
   document.getElementById("notification").style.backgroundColor = "yellow"
   document.getElementById("text").innerText = "enter a valid phone number"

}else if(!pwdPattern.test(pwd)){
   document.getElementById("notification").style.display = "flex"
   document.getElementById("notification").style.backgroundColor = "yellow"
   document.getElementById("text").innerText = "enter a valid password"

}else{
   document.getElementById("notification").style.display = "flex"
   document.getElementById("notification").style.backgroundColor = "green"
   document.getElementById("text").innerText = "success"
}
}

function handleCancel(){
   document.getElementById("notification").style.display = "none"
}