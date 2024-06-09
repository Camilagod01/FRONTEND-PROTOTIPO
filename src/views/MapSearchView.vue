<template>
    <div id="map-search">
      <div class="map-container">
        <header>
          <img src="@/assets/LogoUver.png" alt="Logo Uver" class="logo" />
        </header>
        <div class="map-content">
          <img src="@/assets/map-image.png" alt="Mapa" class="map" />
          <button @click="confirm" class="btn confirm">Confirmar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MapSearchView',
    methods: {
      confirm() {
        console.log('Map search confirmed');
        // Handle confirmation logic here
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
  