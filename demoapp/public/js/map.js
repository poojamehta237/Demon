function initMap() {

      var lat = $('#lat').val();
      var lon = $('#lon').val();

      var lattitude=parseFloat(lat)
      var longitude=parseFloat(lon)
   
      var uluru = {lat: lattitude, lng: longitude};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: uluru
      });
            
      var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }