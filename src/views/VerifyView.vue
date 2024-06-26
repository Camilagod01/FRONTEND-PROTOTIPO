<template>
  <div id="verify">
    <div class="verify-container">
      <div class="form-container">
        <img src="@/assets/LogoUver.png" alt="Logo Uver" />
        <h1>Verificación</h1>
        <form @submit.prevent="handleSubmit">
          <div class="input-group">
            <label for="code">Código de verificación</label>
            <input type="tel" id="code" v-model="code" />
          </div>
          <button type="submit">Aceptar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'VerifyView',
  data() {
    return {
      code: '',
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.code) {
        alert("El campo de código no puede estar en blanco");
        return;
      }
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/verify', {
          verification_code: this.code,
        });
        alert('Código verificado con éxito', response.data);
        this.$router.push({ name: 'user-selection' });
      } catch (error) {
        if (error.response) {
          alert('Codigo de verificacion invalido', error.response.data);
        }
      }
    },
  },
};
</script>
  
  <style scoped>
  #verify {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(to right, #d48f7e, #7a4d7e);
  }
  
  .verify-container {
    display: flex;
    width: 80%;
    max-width: 400px;
    background-color: #ffffff;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    overflow: hidden;
  }
  
  .image-container {
    width: 50%;
    background: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .image-container img {
    width: 80%;
    height: auto;
    object-fit: cover;
  }
  
  .form-container {
    width: 80%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: auto;
  }
  
  .logo {
    width: 10px !important; 
    max-width: 100% !important;
    height: auto !important;
    margin: 0 auto 20px;
    display: block;
  }
  
  .form-container h1 {
    margin-bottom: 20px;
    font-size: 1.8rem;
    color: #333;
    text-align: center;
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
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background-color: #a35ae5;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    margin-top: 20px;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #8e48d8;
  }
  </style>
  