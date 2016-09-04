function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    // center отличается от position, так как в макете маркер
    // находится не в центре карты, а справа чуть ниже центра
    center: {lat: 59.939090, lng: 30.319899}
  });

  var image = 'img/marker.png';
  var companyMarker = new google.maps.Marker({
    position: {lat: 59.938717, lng: 30.323831},
    map: map,
    icon: image
  });
}
