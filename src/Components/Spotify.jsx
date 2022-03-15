

const cliendId = "ca7a5a4ef3214cb0adb569b6433e64b3";
const redirectUri = "http:localhost:3000/" ;

let accessToken;

const Spotify = {
    getAccessToken () { 
        if (accessToken) {
            return accessToken;
        }
//ahora vamos a buscar el token con un metodo loco que te ense;an en code cademy
const accesTokenMatch = window.location.href.match(/access_token=([^&]*)/)
const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)
  
if (accesTokenMatch && expiresInMatch) {
    //esto es raro y no lo entiendo
    
        accessToken = accesTokenMatch [1];
        const expiresIn = Number (expiresInMatch[1])
       
       window.setTimeout (() => accesTokenMatch = "", expiresIn *1000);
       window.history.pushState ("Acces Token", null , "/");

       return accesTokenMatch;
        //no entiendo que paso ahi


    }
    else { 
        const accesUrl = `https://accounts.spotify.com/authorize?client_id=${cliendId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
        window.location = accesUrl;
    }
} , 

search (term) {
const accesToken = Spotify.getAccessToken() ;
return fetch (`https://api.spotify.com/v1/search?type=track&q=${term}` , { 
    headers: { Authorization: `Bearer  + ${accesToken}`} }

).then(response =>{
    return response.json();
    // dice que la respuesta de la fetch recuest se transforme en un archivo json
}).then (jsonResponse => {
    if (!jsonResponse.tracks) 
// si el archivo json no tiene tracks
{
return [];
// returnea un array vacio
}
// sino mapea un array con las propiedades de esos tracks
return jsonResponse.tracks.items.map (track => ({
    id: track.id,
    name: track.name,
    artist: track.artist [0].name,
    album: track.album.name,
    uri: track.uri
}));

} )

},

savePlaylist (name, trackUris) {
    if (!name || !trackUris.length) {
        return;
    }

const accessToken = Spotify.getAccessToken();
const headers = {Authorization: `Bearer ${accessToken}`};
let userId;

return fetch ("https://api.spotify.com/v1/me", {headers: headers})
.then(response => response.json()
).then(jsonResponse => {
    userId = jsonResponse.id;

        
    return fetch (`https://api.spotify.com/v1/users/${userId}/playlists`, 
    {
        headers: headers,
        method: 'POST',
        body: JSON.stringify ({name:name})
    }).then (response => response.json()
    ).then(jsonResponse => {
        const playlistId = jsonResponse.id;

        return fetch (`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,{
            headers: headers,
            method: 'POST',
            body: JSON.stringify ({uris: trackUris})
        })
    })
    
})

 
}

};

