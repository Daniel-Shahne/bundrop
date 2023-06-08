import { type } from "@testing-library/user-event/dist/type"
import { attemptLoginAsync } from "../loginpage/loginpagescript"

export async function tryRegisterUser(event, userStateVarSetter, navigatorCallback, errorSetter){
    //Prevents default
    event.preventDefault()
    
    // Gets all the input values
    const username_ = event.target.elements.usernameInput.value
    const password1 = event.target.elements.passwordInput1.value
    const password2 = event.target.elements.passwordInput2.value

    // errors array that errorSetter will receive
    let errorsList = []

    // Checks if all inputs have the correct length
    if(username_.length < 4) errorsList.push("Username must be 4 characters or more")
    if(password1.length < 4) errorsList.push("Password must be 4 characters or more")
    if(password1 !== password2) errorsList.push("Passwords must match")

    // sets errors state if errorsList contains any elements
    if(errorsList.length > 0){
        errorSetter(errorsList)
        return
    }

    // registers the user
    await fetch('http://localhost:2001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: 0,
          username: username_,
          password: password1,
          favourites: []
        })
      })

    // gets the user (making sure its created)
    const user = await attemptLoginAsync(username_, password1)

    // logs in user and redirects to menu
    userStateVarSetter(user)
    navigatorCallback("/")
}
