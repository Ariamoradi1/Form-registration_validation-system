const user = [
 
 {name:"", family:"", age:"", email:""}, 
 
  {name:"", family:"", age:"", email:""}, 
  
  {name:"", family:"", age:"", email:""},
  
 ]



const userName = prompt("لطفا نام خود را وارد کنید")

const userFamily = prompt("لطفا نام خانوادگی را وارد کنید")

const userAge = Number(prompt("لطفا سن خود را وارد کنید")) 

const userEmail = prompt("لطفا ایمیل خودرا وارد کنید")




if(userName.length<3 || userName.length>10){
     
     alert("لطفا نام را به درستی وارد کنید ")
     
 }else if(userFamily.length<3 || userFamily.length>15){
     
     alert("لطفا نام خانوادگی را به درستی وارد کنید")
     
 }else if(isNaN(userAge) || userAge>4){
     
     
     alert("لطفا سن را درست وارد کنید")
     
 }else{
     
     
    const newUser = {
        
        name:userName,
        family:userFamily,
        age:userAge,
        email:userEmail,
        
        
        
    }
    
    use.push(newUser)
    
    alert("خوش امدی")
     
 }

console.log(user)
