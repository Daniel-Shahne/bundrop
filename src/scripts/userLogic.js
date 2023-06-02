async function updateUser(userState){
    return await fetch(`http://localhost:2001/users/${userState.id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userState)
})
}

export function toggleUserFavourite(userState, userStateSetter, id){    
    if(userState.favourites.includes(id)){
        const newUserFavs = userState.favourites.filter(elem => elem !== id)
        userStateSetter((prevState) => ({
            ...prevState,
            favourites: newUserFavs
        }))
    }
    else{
        const newUserFavs = userState.favourites.push(id)
        userStateSetter((prevState) => ({
            ...prevState,
            favourites: newUserFavs
        }))
    }
}