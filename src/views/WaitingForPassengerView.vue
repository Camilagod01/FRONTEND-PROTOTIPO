<template>
  <div id="waiting-for-passenger">
    <div class="waiting-container">
      <header>
        <img src="@/assets/LogoUver.png" alt="Logo Uver" class="logo" />
      </header>
      <div class="waiting-content">
        <div class="ui active centered inline loader"></div>
        <p>Esperando solicitudes de pasajeros...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WaitingForPassengerView'
};
</script>

<style scoped>
#waiting-for-passenger {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #e96443, #904e95);
}

.waiting-container {
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

.waiting-content {
  margin-top: 20px;
}

.ui.loader {
  margin-bottom: 20px;
}

p {
  font-size: 1.5rem;
  color: #333;
}
</style>
