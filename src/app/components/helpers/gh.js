export const getGhUser = (callback)=>{
    fetch('https://api.github.com/users/TutozGhub')
    .then((data)=>data.json())
    .then((res)=>{
        const user = {
            photo: res.avatar_url,
            bio: res.bio
        }
        return callback(user);
    })
    .catch((error)=>{
        console.log('Error al consultar la API de GH: ' + error);
        return;
    })
}