<template>
    <div id="user-search-view">
      <div class="search-container">
        <header>
          <img src="@/assets/LogoUver.png" alt="Logo Uver" class="logo" />
          <h1>Bienvenido Pedrito!</h1>
        </header>
        <div class="form-container">
          <div class="image-container">
            <img src="@/assets/map-image.png" alt="Mapa" />
          </div>
          <div class="form-content">
            <h2>¿Dónde quieres ir?</h2>
            <form @submit.prevent="handleSubmit">
              <div class="input-group">
                <label for="ubicacion">Ingresar ubicación</label>
                <input type="text" id="ubicacion" v-model="ubicacion" />
              </div>
              <div class="input-group">
                <label for="destino">Ingresar destino</label>
                <input type="text" id="destino" v-model="destino" />
              </div>
              <button type="submit">Buscar Viaje</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserSearchView',
    data() {
      return {
        ubicacion: '',
        destino: '',
      };
    },
    methods: {
      handleSubmit() {
      console.log('Journey search submitted', this.ubicacion, this.destino);
      this.$router.push({ name: 'map-search' });
    },
  },
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
  
  .image-container img {
    width: 100%;
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
  
  .input-group label {
    display: block;
    margin-bottom: 5px;
    color: #666;
  }
  
  .input-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
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
  </style>
  