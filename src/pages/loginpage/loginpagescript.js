// Logic imports
import { json, useNavigate } from "react-router-dom";

export function submitLoginForm(event){
    const username = event.target.elements.usernameInput.value
    const password = event.target.elements.passwordInput.value
    
    event.preventDefault();
    if (document.activeElement.name === "submitLogin"){
        console.log(`Submitting login with name ${username} and pass ${password}`)
        attemptLogin(username, password)
    }
    else if (document.activeElement.name === "submitRegister"){
        console.log(`Submitting reister with name ${username} and pass ${password}`)
    }
    else{
        console.error("Unexpected error in submitLoginForm")
    }
}


function attemptLogin(username, password){
    let usersJson = null;
    fetch("http://localhost:2001/users")
    .then((res) => res.json())
    .then((jsonRes) => {
        usersJson = jsonRes;
        console.log(usersJson)
    })
    .then(() => console.log(usersJson))
}