<template>
  <div>
    <div id="user-search-view">
      <div class="search-container">
        <header>
          <img src="@/assets/LogoUver.png" alt="Logo Uver" class="location-logo" />
        </header>
        <div class="form-container">
          <div class="image-container" id="map-container">
            <div id="map"></div>
          </div>
          <div class="form-content">
            <h2>¿Dónde quieres ir?</h2>
            <form @submit.prevent="handleSubmit">
              <div class="input-group">
                <div class="ui right icon input large">
                  <input 
                    type="text" 
                    placeholder="Ingresar Ubicacion" 
                    v-model="address" 
                    id="autocomplete"
                  />
                  <i class="dot circle link icon" @click="locatorButtonPressed"></i>
                </div>
              </div>
              <div class="input-group">
                <div class="ui right icon input large">
                  <input 
                    type="text" 
                    placeholder="Ingresar Destino" 
                    v-model="destination" 
                    id="destination"
                  />
                </div>
              </div>
              <button type="submit">Buscar Viaje</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      address: '',
      destination: '',
      map: null,
      userMarker: null,
      destinationMarker: null,
      directionsService: null,
      directionsRenderer: null,
      googleMapsLoaded: false
    };
  },
  mounted() {
    if (typeof google !== 'undefined' && google.maps && google.maps.places) {
      this.googleMapsLoaded = true;
      this.initAutocomplete();
      this.initMap();
    } else {
      window.initAutocomplete = this.initAutocomplete;
      window.initMap = this.initMap;
      if (!this.googleMapsLoaded) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCTKEIyiVt5QGkOcoXGr452D49bKmF0wuY&libraries=places&callback=initAutocomplete`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        script.onload = () => {
          this.googleMapsLoaded = true;
          this.initMap();
        };
      }
    }
  },
  methods: {
    initAutocomplete() {
      if (typeof google !== 'undefined' && google.maps && google.maps.places) {
        const autocomplete = new google.maps.places.Autocomplete(
          document.getElementById('autocomplete')
        );
        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace();
          if (place.geometry) {
            this.address = place.formatted_address;
            this.showUserLocationOntheMap(place.geometry.location.lat(), place.geometry.location.lng());
          }
        });

        const destinationAutocomplete = new google.maps.places.Autocomplete(
          document.getElementById('destination')
        );
        destinationAutocomplete.addListener('place_changed', () => {
          const place = destinationAutocomplete.getPlace();
          if (place.geometry) {
            this.destination = place.formatted_address;
            this.showDestinationOnMap(place.geometry.location.lat(), place.geometry.location.lng());
          }
        });
      }
    },
    initMap() {
      if (typeof google !== 'undefined' && google.maps) {
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8
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
      }
    },
    locatorButtonPressed() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.getAddressFrom(
              position.coords.latitude,
              position.coords.longitude);
              
              this.showUserLocationOntheMap(
                position.coords.latitude,
                position.coords.longitude);

          },
          error => {
            console.log(error.message);
          }
        );
      } else {
        console.log("Your browser does not support geolocation API");
      }
    },
    getAddressFrom(lat, long) {
      const apiKey = 'AIzaSyCTKEIyiVt5QGkOcoXGr452D49bKmF0wuY';
      axios
        .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${apiKey}`)
        .then(response => {
          if (response.data && response.data.error_message) {
            console.log(response.data.error_message);
          } else if (response.data && response.data.results && response.data.results[0]) {
            this.address = response.data.results[0].formatted_address;
          } else {
            console.log("No results found.");
          }
        })
        .catch(error => {
          console.log(error.message);
        });
    },
    showUserLocationOntheMap(latitude, longitude) {
      if (this.map) {
        const position = new google.maps.LatLng(latitude, longitude);
        this.map.setCenter(position);
        if (this.userMarker) {
          this.userMarker.setPosition(position);
        } else {
          this.userMarker = new google.maps.Marker({
            position,
            map: this.map,
            title: 'Your Location'
          });
        }
      } else {
        this.map = new google.maps.Map(document.getElementById("map"), {
          zoom: 15,
          center: new google.maps.LatLng(latitude, longitude),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        this.userMarker = new google.maps.Marker({
          position: new google.maps.LatLng(latitude, longitude),
          map: this.map,
          title: 'Your Location'
        });
      }
    },
    showDestinationOnMap(latitude, longitude) {
      if (this.map) {
        const position = new google.maps.LatLng(latitude, longitude);
        if (this.destinationMarker) {
          this.destinationMarker.setPosition(position);
        } else {
          this.destinationMarker = new google.maps.Marker({
            position,
            map: this.map,
            title: 'Destination'
          });
        }
        this.calculateAndDisplayRoute();
      }
    },
    calculateAndDisplayRoute() {
      if (this.directionsService && this.directionsRenderer && this.userMarker && this.destinationMarker) {
        const request = {
          origin: this.userMarker.getPosition(),
          destination: this.destinationMarker.getPosition(),
          travelMode: google.maps.TravelMode.DRIVING
        };
        this.directionsService.route(request, (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.directionsRenderer.setDirections(result);
          } else {
            console.log('Directions request failed due to ' + status);
          }
        });
      }
    },
    handleSubmit() {
      if (!this.address || !this.destination) {
        alert('Debe seleccionar un lugar de origen y uno de destino');
        return;
      }
  console.log('Journey search submitted', this.address, this.destination);
  this.$router.push({
    name: 'map-search',
    query: {
      userLocation: JSON.stringify({
        lat: this.userMarker.getPosition().lat(),
        lng: this.userMarker.getPosition().lng()
      }),
      destinationLocation: JSON.stringify({
        lat: this.destinationMarker.getPosition().lat(),
        lng: this.destinationMarker.getPosition().lng()
      })
    }
  });
}
  }
};
</script>

<style scoped>
#user-search-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #e96443, #904e95);
}

.search-container {
  background-color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  max-width: 800px;
  width: 100%;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
}

.logo {
  width: 80px;
}

h1 {
  font-size: 1.5rem;
  color: #333;
}

.form-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.image-container {
  width: 40%;
}

.image-container #map {
  width: 100%;
  height: 200px;
  border-radius: 10px;
}

.form-content {
  width: 55%;
}

.form-content h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
}

.input-group {
  margin-bottom: 20px;
  text-align: left;
}

.ui.right.icon.input.large {
  display: flex;
  align-items: center;
  border: none;
  background: none;
  box-shadow: none;
  padding: 0;
  width: 100%;
}

.ui.right.icon.input.large input {
  flex-grow: 1;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  outline: none;
}

.ui.right.icon.input.large i.icon {
  margin-left: 10px;
  cursor: pointer;
}

button {
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  border: none;
  border-radius: 20px;
  background-color: #a35ae5;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #8e48d8;
}

.pac-item:hover {
  background-color: #aaaaaa;
}

.location-logo {
  display: flex;
  justify-content: center; /* Centrar horizontalmente */
  align-items: center;    /* Centrar verticalmente */
  height: 5vh;          /* Ajusta la altura según sea necesario */
}
</style>
