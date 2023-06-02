// Logic imports
import { type } from "@testing-library/user-event/dist/type";
import { json, useNavigate } from "react-router-dom";

export function submitLoginForm(event){
    const username = event.target.elements.usernameInput.value
    const password = event.target.elements.passwordInput.value
    
    event.preventDefault();
    if (document.activeElement.name === "submitLogin"){
        attemptLogin(username, password)
    }
    else if (document.activeElement.name === "submitRegister"){
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
        usersJson = jsonRes;})
    .then(() => {
        const foundUser = usersJson.find(o => o.username === username)
        if (typeof foundUser !== "undefined"){
            console.log("User found")
            if(foundUser.password !== password){
                console.log("Wrong password")
            }
        }
        else{
            console.log("found no user")
        }
    })
}