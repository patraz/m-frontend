
<template>
  <div>
    <Nav/>
    <router-view/>
    <Footer/>
  </div>

</template>
<style lang="scss">
</style>

<script>


import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  },

}
document.title = 'Strona główna | Ściek'
</script>