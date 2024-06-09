<template>
    <div id="user-selection">
      <div class="selection-container">
        <img src="@/assets/LogoUver.png" alt="Logo Uver" class="logo" />
        <h1>Regístrate para...</h1>
        <button @click="handleSelection('buscar-viaje')" class="btn selection">Buscar Viaje</button>
        <button @click="handleSelection('conducir')" class="btn selection">Conducir</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserSelectionView',
    methods: {
      handleSelection(option) {
      console.log('Selected option:', option);
      if (option === 'conducir') {
        this.$router.push({ name: 'driver-register' });
      } else if (option === 'buscar-viaje') {
        this.$router.push({ name: 'user-search-view' });
      }
    }
  }
};
</script>
  <style scoped>
  #user-selection {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(to right, #e96443, #904e95);
  }
  
  .selection-container {
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
  
  .btn.selection {
    display: block;
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
    border: none;
    border-radius: 20px;
    background-color: #a35ae5;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn.selection:hover {
    background-color: #8e48d8;
  }
  </style>
  