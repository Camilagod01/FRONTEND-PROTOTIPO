<template>
    <div id="driver-register">
      <div class="register-container">
        <img src="@/assets/LogoUver.png" alt="Logo Uver" class="logo" />
        <h1>Regístrate Conductor</h1>
        <form @submit.prevent="handleSubmit">
          <div class="input-group">
            <label for="placa">Placa Vehículo</label>
            <input type="text" id="placa" v-model="placa" />
          </div>
          <div class="input-group">
            <label for="marca">Marca del Vehículo</label>
            <input type="text" id="marca" v-model="marca" />
          </div>
          <div class="input-group">
            <label for="modelo">Modelo</label>
            <input type="text" id="modelo" v-model="modelo" />
          </div>
          <div class="input-group">
            <label for="color">Color</label>
            <input type="text" id="color" v-model="color" />
          </div>
          <button type="submit">Vamos a Conducir</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DriverRegisterView',
    data() {
      return {
        placa: '',
        marca: '',
        modelo: '',
        color: '',
      };
    },
    methods: {
      handleSubmit() {
        console.log('Driver form submitted', this.placa, this.marca, this.modelo, this.color);
        // Handle the driver registration logic here
      },
    },
  };
  </script>
  
  <style scoped>
  #driver-register {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(to right, #e96443, #904e95);
  }
  
  .register-container {
    background-color: #ffffff;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    padding: 40px;
    text-align: center;
  }
  
  .logo {
    width: 100px;
    margin: 0 auto 20px;
  }
  
  h1 {
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: #333;
  }
  
  .input-group {
    margin-bottom: 20px;
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
    display: block;
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
  