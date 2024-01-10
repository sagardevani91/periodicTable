let arr = [];
let obj = {};
let name1 = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message")
let btn = document.getElementById("btn1");
let form = document.getElementById("contact-form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(name1.value!="" && email.value!="" && message.value!=""){
        obj = {
            Name : name1.value,
            Email : email.value,
            Message : message.value
        };
    
        arr.push(obj);
        arr.push(JSON.parse(localStorage.getItem('Names')));    
        let string = JSON.stringify(arr);
        localStorage.setItem("Names", string) 
        alert("Sended Succefffully")
        name1.value = "";
        email.value = "";
        message.value = "";
    }
    else{
        alert("Error!")
    }
})
// btn.addEventListener("click" , (e) =>{
//     e.preventDefault();
//     obj = {
//         Name : name1.value,
//         Email : email.value,
//         Message : message.value
//     };
//     arr.push(obj);
//     arr.push(JSON.parse(localStorage.getItem('Names')));    
//     let string = JSON.stringify(arr);
//     localStorage.setItem("Names", string) 

//     name1.value = "";
//     email.value = "";
//     message.value = "";
// });
