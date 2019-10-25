function initMap() {
    var position = {lat: 30.060089, lng: -98.065446};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 18, center: position});
    var marker = new google.maps.Marker({
        position: {
            lat: 30.060089,
            lng: -98.065446
        }, map:map
    });
}