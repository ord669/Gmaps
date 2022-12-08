'use strict'


function initMap(lat = 31, lng = 31, zoom) {
    renderSavedPlaces()

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


    map.addListener("center_changed", () => {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(() => {
            map.panTo(marker.getPosition());
        }, 3000);
    });

    marker.addListener("click", () => {
        map.setZoom(8);
        map.setCenter(marker.getPosition());
    });


    map.addListener("click", (e) => {
        placeMarkerAndPanTo(e.latLng, map);
    });



    google.maps.event.addListener(map, 'click', function (event) {
        const lat = +event.latLng.lat()
        const lng = +event.latLng.lng()
        const name = prompt('name the place')
        addSavePlace(lat, lng, name)
        // renderSavedPlaces()


    });





}



function placeMarkerAndPanTo(latLng, map) {
    new google.maps.Marker({
        position: latLng,
        map: map,
    });
    console.log('latLng:', latLng)
    map.panTo(latLng);
}




function showLocation(...position) {

    const lat = position[0]
    const lng = position[1]
    const accuracy = position[2]

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

function renderSavedPlaces() {
    const Places = getPlaces()

    const strHTMLs = Places.map(place => `
    <tr>
    <td class="text-center"> ${place.id}</td>
    <td class="text-center"> ${place.name}</td>
    <td class="text-center"> ${place.lat}</td>
    <td class="text-center"> ${place.lng}</td>



    </tr>
    ` )

    console.log('strHTMLs:', strHTMLs)


    document.querySelector('.saved').innerHTML = strHTMLs.join('')


}