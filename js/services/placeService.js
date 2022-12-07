'use strict'


function getPosition() {
    const user = getUserPref()
        const userLocation = user.location.split(',')
        const lat = +userLocation[0]
        const lng = +userLocation[1]
        const accuracy = +user.zoom
        
        showLocation(lat,lng,accuracy)
    // if (!navigator.geolocation) {
    //     alert('HTML5 Geolocation is not supported in your browser')
    //     return
    // }

    // One shot position retrieval...
    // navigator.geolocation.getCurrentPosition(showLocation, handleLocationError)
    
    // ...or continous watch
    // navigator.geolocation.watchPosition(showLocation, handleLocationError)
}




function handleLocationError(error) {
    var locationError = document.getElementById("locationError")

    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message
            break
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location."
            break
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message
            break
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location."
            break
    }
}