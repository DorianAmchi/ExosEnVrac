/* global google */

var content = document.getElementById("content");
var map, infoWindow;

function initMape() {
    var newDiv = document.createElement("div");
    newDiv.id = "map";
    content.appendChild(newDiv);
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 6
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

function clearDiv() {
    content.style.textAlign = "";

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

}

function test1() {
    var newDiv = document.createElement("div");
    newDiv.className = "newDiv";
    content.appendChild(newDiv);
}

function test2() {
    for (var i = 0; i < document.getElementById("content").childNodes.length; i++)
    {
        var newDiv = document.getElementsByClassName("newDiv")[i];
        newDiv.innerHTML = "<h6>bonjour</h6>";
    }
}

function test3() {
    content.style.textAlign = "center";
}

function test4() {
    var car = document.createElement("div");
    var bla = document.createElement("div");
    bla.id = "bla";
    car.id = "car";
    content.appendChild(bla);
    content.appendChild(car);
}

function test5() {
    var bla = document.getElementById("bla");
    var car = document.getElementById("car");
    for (var i = 0; i < document.getElementById("bla").childNodes.length; i++)
    {
        var newDiv = document.getElementsByClassName("newDiv")[i];
        newDiv.innerHTML = "<h6>bonjour</h6>";
    }
    car.appendChild(bla);
}

function initMap() {
}
