// Logic imports


export function submitLoginForm(event, userStateVarSetter, navigatorCallback){
    const username = event.target.elements.usernameInput.value
    const password = event.target.elements.passwordInput.value
        
    event.preventDefault();
    if (document.activeElement.name === "submitLogin"){
        attemptLoginAsync(username, password)
        .then((result) => {
            if(typeof result === "object"){
                userStateVarSetter(result)
                navigatorCallback("/")
            }
        })
    }
    else if (document.activeElement.name === "submitRegister"){
        console.log("Submitting to register")
    }
    else{
        console.error("Unexpected error in submitLoginForm")
    }
}

/**
 * Does an async call to a json-server containing users
 * @param {*} username Username of authentication attempt
 * @param {*} password Password of authentication attempt
 * @returns Promise resolving to true if login was successfull,
 * or a string representing an error message of why login was
 * unsuccessfull
 */
function attemptLoginAsync(username, password){
    return new Promise(function(resolve, reject){
        let usersJson = null;
        fetch("http://localhost:2001/users")
        .then((res) => res.json())
        .then((jsonRes) => {
            usersJson = jsonRes;})
        .then(() => {
            const foundUser = usersJson.find(o => o.username === username)
            if (typeof foundUser !== "undefined"){
                if(foundUser.password !== password){
                    resolve("Wrong password");
                }
                else if (foundUser.password === password){
                    resolve(foundUser);
                }
            }
            else{
                resolve(`No user ${username} found`);
            }
        })
    })
}