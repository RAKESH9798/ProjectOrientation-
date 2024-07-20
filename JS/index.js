// Geolocation API Script
function Getlocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("location").innerHTML = "GeoLocation is not supported by Your Browser";
    }
}

function showPosition(position) {
    const latitue = position.coords.latitude;
    const longitude = position.coords.longitude;
    document.getElementById("location").innerHTML = "Latitude: " + latitue + ", Longitude: " + longitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("location").innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("location").innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById("location").innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("location").innerHTML = "An unknown error occurred.";
            break;
    }
}

// Canvas API Script
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Drawing a rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 150, 100);

// Drawing a circle
ctx.beginPath();
ctx.arc(300, 200, 50, 0, 2 * Math.PI);
ctx.strokeStyle = 'red';
ctx.stroke();

// Drawing text
ctx.font = '30px Arial';
ctx.fillStyle = 'green';
ctx.fillText('Hello Canvas!', 50, 350);
