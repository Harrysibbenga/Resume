function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: {
            lat: 18.5331131,
            lng: 0.0646187
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 52.0406224, lng: -0.7594171 },
        { lat: 52.9172085, lng: -1.1937813 },
        { lat: -17.9427095, lng: 25.7432598 },
        { lat: 24.417293, lng: 54.4611633 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
