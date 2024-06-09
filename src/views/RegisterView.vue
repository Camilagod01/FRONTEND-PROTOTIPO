<template>
  <div id="register">
    <div class="register-container">
      <div class="image-container">
        <img src="@/assets/imagen-carro.png" alt="Viaje en coche" />
      </div>
      <div class="form-container">
        <img src="@/assets/LogoUver.png" alt="Logo Uver" />
        <h1>Crear Cuenta</h1>
        <form @submit.prevent="handleSubmit">
          <div class="input-group">
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" v-model="nombre" />
          </div>
          <div class="input-group">
            <label for="apellidos">Apellidos</label>
            <input type="text" id="apellidos" v-model="apellidos" />
          </div>
          <div class="input-group">
            <label for="telefono">Número Telefónico</label>
            <input type="tel" id="telefono" v-model="telefono" />
          </div>
          <div class="input-group">
            <label for="cedula">Cédula</label>
            <input type="text" id="cedula" v-model="cedula" />
          </div>
          <button type="submit">Crear Cuenta</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
  data() {
    return {
      nombre: '',
      apellidos: '',
      telefono: '',
      cedula: '',
    };
  },
  methods: {
    handleSubmit() {
      console.log('Formulario enviado', this.nombre, this.apellidos, this.telefono, this.cedula);
      // Navigate to the user selection view
      this.$router.push({ name: 'user-selection' });
    },
  },
};
</script>

<style scoped>
#register {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #e96443, #904e95);
}

.register-container {
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
  width: 100px;
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
