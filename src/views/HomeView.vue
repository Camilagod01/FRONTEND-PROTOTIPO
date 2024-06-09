<template>
  <div id="home">
    <header>
      <div class="logoUver">
        <img src="@/assets/LogoUver.png" alt="Logo Uver" />
      </div>
      <nav>
        <router-link to="/login">
          <button class="btn login">Inicia Sesión</button>
        </router-link>
        <router-link to="/register">
          <button class="btn register">Regístrate</button>
        </router-link>
      </nav>
    </header>
    <main>
      <div class="intro">
        <h1>Viaja con comodidad y seguridad a cualquier lugar</h1>
        <img src="@/assets/imagen-carro.png" alt="Viaje en coche" />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
  }
  
  #app {
    text-align: center;
  }
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .logoUver {
    display: flex;
    align-items: center;
  }
  
  .logoUver img {
    height: 40px;
    margin-right: 10px;
  }
  
  .logoUver span {
    font-size: 24px;
    font-weight: bold;
  }
  
  nav .btn {
    margin-left: 10px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    color: white;
  }
  
  nav .btn.login {
    background-color: #000000;
  }
  
  nav .btn.register {
    background-color: #dddddd;
    color: black;
  }
  
  nav .btn.login:hover {
    background-color: #333333;
  }
  
  nav .btn.register:hover {
    background-color: #cccccc;
  }
  
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    min-height: calc(100vh - 68px); /* Ajustar según la altura del header */
    background-color: #000000;
    color: white;
  }
  
  .intro {
    text-align: left; /* Cambiado a left para alinear el texto con la imagen */
    max-width: 800px;
    display: flex;
    flex-direction: row; /* Cambiado a row para que la imagen y el texto estén en una sola línea */
    align-items: center;
    justify-content: space-between;
  }
  
  .intro h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    max-width: 50%; /* Ajustado para que el texto ocupe la mitad del contenedor */
    font-size: 3rem; /* Ajustado para que el tamaño de la fuente sea más grande */
    font-weight: bold; /* Aumentado el grosor de la fuente */
    color: white; /* Color del texto */
    line-height: 1.2; /* Espaciado entre líneas */
  }
  
  .intro img {
    max-width: 50%;
    height: auto;
    border-radius: 10px;
  }
  </style>
  