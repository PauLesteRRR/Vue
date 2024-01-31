<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <header class="bg-dark pt-2 pb-2">
        <div class="container">
            <div class="row justify-content-between">
                <div class="logo col-auto text-warning">World Skills Competition</div>
                <nav class="col-auto">
                    <router-link to="/">Competitor BMI</router-link>
                    <router-link to="/registration">Registration</router-link>
                </nav>
            </div>
        </div>
  </header>
  <router-view></router-view>
  <!-- <BmiComponent/> -->
</template>

<script>
// import BmiComponent from './components/Bmi.vue'

export default {
  name: 'App'
}
</script>
<style>
@import 'assets/css/bootstra.min.css';
@import 'assets/css/style.css';

.router-link-active{
  color: rgba(255,193,7)
}
</style>
