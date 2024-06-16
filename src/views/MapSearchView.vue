<template>
  <div id="map-search">
    <div class="map-container">
      <header>
        <img src="@/assets/LogoUver.png" alt="Logo Uver" class="logo" />
      </header>
      <div class="map-content">
        <div id="map" class="map"></div>
        <button @click="confirm" class="btn confirm">Confirmar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapSearchView',
  data() {
    return {
      map: null,
      directionsService: null,
      directionsRenderer: null,
      userLocation: JSON.parse(this.$route.query.userLocation),
      destinationLocation: JSON.parse(this.$route.query.destinationLocation)
    };
  },
  mounted() {
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCTKEIyiVt5QGkOcoXGr452D49bKmF0wuY&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.onerror = () => {
        console.error("Google Maps JavaScript API failed to load.");
      };
      document.head.appendChild(script);
      window.initMap = this.initMap.bind(this);
    } else {
      this.initMap();
    }
  },
  methods: {
    initMap() {
      if (window.google && google.maps) {
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: this.userLocation,
          zoom: 10
        });

        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer({
          map: this.map,
          suppressMarkers: true,
          polylineOptions: {
            strokeColor: 'black',
            strokeOpacity: 1.0,
            strokeWeight: 3
          }
        });

        this.showUserLocationOntheMap();
        this.showDestinationOnMap();
        this.calculateAndDisplayRoute();
      }
    },
    showUserLocationOntheMap() {
      if (this.map) {
        const position = new google.maps.LatLng(this.userLocation.lat, this.userLocation.lng);
        this.map.setCenter(position);
        new google.maps.Marker({
          position,
          map: this.map,
          title: 'Your Location'
        });
      }
    },
    showDestinationOnMap() {
      if (this.map) {
        const position = new google.maps.LatLng(this.destinationLocation.lat, this.destinationLocation.lng);
        new google.maps.Marker({
          position,
          map: this.map,
          title: 'Destination'
        });
      }
    },
    calculateAndDisplayRoute() {
      if (this.directionsService && this.directionsRenderer) {
        const request = {
          origin: new google.maps.LatLng(this.userLocation.lat, this.userLocation.lng),
          destination: new google.maps.LatLng(this.destinationLocation.lat, this.destinationLocation.lng),
          travelMode: google.maps.TravelMode.DRIVING
        };
        this.directionsService.route(request, (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.directionsRenderer.setDirections(result);
          } else {
            console.error('Directions request failed due to ' + status);
          }
        });
      }
    },
    confirm() {
      this.$router.push({ name: 'WaitingForDriverView' });
    }
  }
};
</script>

<style scoped>
#map-search {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #e96443, #904e95);
}

.map-container {
  background-color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  max-width: 600px;
  width: 100%;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
}

.logo {
  width: 80px;
}

.map-content {
  margin-top: 20px;
}

.map {
  width: 100%;
  height: 400px; /* Adjust as needed */
  border-radius: 10px;
  margin-bottom: 20px;
}

.btn.confirm {
  padding: 15px 30px;
  border: none;
  border-radius: 20px;
  background-color: #a35ae5;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn.confirm:hover {
  background-color: #8e48d8;
}
</style>
