<template>
  <div id="app">

    <router-view/>
    <!-- <app-tabs/> -->
  </div>
</template>

<script>
import Tabs from './components/Tabs'
export default {
  name: 'App',
  components:{
    [Tabs.name]:Tabs
  }
}
</script>

<style>

</style>
