async function updateUser(userState){
    await fetch(`http://localhost:2001/users/${userState.id}`,{
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userState)
})
}

export async function toggleUserFavourite(userState, userStateSetter, id){
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
    await updateUser(userState);
}