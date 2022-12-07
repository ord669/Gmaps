'use strict'


function initMap(lat = 31, lng = 31,zoom) {

    var elMap = document.querySelector('.map')
    var options = {
        center: { lat, lng },
        zoom: zoom
    }

    var map = new google.maps.Map(
        elMap,
        options
    )

    var marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        title: 'Hello World!'
    })

    
    
    

}

function showLocation(...position) {
    const lat = position[0]
    const lng = position[1]
    const accuracy =  position[2]
    console.log('accuracy:',accuracy )

    // let {latitude: lat, longitude: lng, accuracy} = position.coords
    // console.log('position:', position)
    // if(getUserPref()){
    //     const user = getUserPref()
    //     const userLocation = user.location.split(',')
    //     lat = +userLocation[0]
    //     lng = +userLocation[1]
    //     accuracy = user.zoom

    // }
    
    
    document.getElementById("latitude").innerHTML = lat
    document.getElementById("longitude").innerHTML = lng
    document.getElementById("accuracy").innerHTML = accuracy

    // var date = new Date(position.timestamp)
    // document.getElementById("timestamp").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    

    initMap(lat, lng, accuracy)
    
}