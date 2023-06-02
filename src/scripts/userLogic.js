export function toggleUserFavourite(userState, userStateSetter, id){    
    if(userState.favourites.includes(id)){
        const newUserFavs = userState.favourites.filter(elem => elem !== id)
        userStateSetter((prevState) => ({
            ...prevState,
            favourites: newUserFavs
        }))
        console.log("Includes was a goddamn function")
    }
    else{
        const newUserFavs = userState.favourites.slice()
        newUserFavs.push(id)
        userStateSetter((prevState) => ({
            ...prevState,
            favourites: newUserFavs
        }))
    }
}