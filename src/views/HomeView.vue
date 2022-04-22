<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button type="button" class="btn btn-primary">Primary</button>
    <div class="counter">
      {{$store.state.counter}}
  </div>
  <div class="buttons">
    <button @click ="$store.commit('decreaseCounter')">-</button>
    <button @click="$store.commit('increaseCounter')">+ </button>
  </div>
  <vm-container>
        <vm-button>It works!</vm-button>
    </vm-container>
  </div>
 

</template>

<script>


export default {
  name: 'HomeView',
  
  
 
}
</script>

<style>
div{
  margin-bottom: 10px;
}
.counter{
  font-size: 80px;
}
.buttons button{
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
