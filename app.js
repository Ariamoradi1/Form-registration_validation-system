const user = [
 
 {name:"", family:"", age:"", email:""}, 
 
  {name:"", family:"", age:"", email:""}, 
  
  {name:"", family:"", age:"", email:""},
  
 ]



const userName = prompt("please enter your name")

const userFamily = prompt("please enter your family name")

const userAge = Number(prompt("please enter your age")) 

const userEmail = prompt("please enter your email")




if(userName.length<3 || userName.length>10){
     
     alert("The name must have a minimum of three characters and a maximum of 10 characters ")
     
 }else if(userFamily.length<3 || userFamily.length>15){
     
     alert("The family must have a minimum of 3 characters and a maximum of 15 characters")
     
 }else if(isNaN(userAge) || userAge>4){
     
     
     alert("age must be a number and three digits")
     
 }else{
     
     
    const newUser = {
        
        name:userName,
        family:userFamily,
        age:userAge,
        email:userEmail,
        
        
        
    }
    
    use.push(newUser)
    
    alert("welcome!")
     
 }

console.log(user)
