<template>
     <h1>{{ greeting }}</h1>
 </template>

<script>
    module.exports = {
        data: function() {
           return {
              greeting: 'Привет Webpack!'
           }
        }
    }
</script>

<style lang="sass">
   h1
      color: green
</style>
