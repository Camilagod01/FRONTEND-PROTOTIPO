<template>
  <div id="login">
    <div class="login-container">
      <div class="image-container">
        <img src="@/assets/imagen-carro.png" alt="Viaje en coche" />
      </div>
      <div class="form-container">
        <img src="@/assets/LogoUver.png" alt="Logo Uver" />
        <h1>Inicia Sesión</h1>
        <form @submit.prevent="handleSubmit">
          <div class="input-group">
            <label for="phone">Número Telefónico</label>
            <input type="tel" id="phone" v-model="phone" />
          </div>
          <button type="submit">Inicia Sesión</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginView',
  data() {
    return {
      phone: '',
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.phone) {
        alert("Debe ingresar un numero de telefono");
        return;
      }
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
          numero_telefonico: this.phone,
        });
        alert('Código de verificación enviado', response.data);
        this.$router.push({ name: 'Verify' });
      } catch (error) {
        if (error.response) {
          alert('Error al enviar el codigo de verificacion, ingrese un numero telefonico valido', error.response.data);
        }
      }
    },
  },
};
</script>

<style scoped>
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #d48f7e, #7a4d7e);
}

.login-container {
  display: flex;
  width: 80%;
  max-width: 1000px;
  background-color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
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
  width: 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

