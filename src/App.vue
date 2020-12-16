<template>
  <Header/>
  <Nav/>
  <Content/>
  <Footer/>
</template>

<script>
import Header from '@/views/Header.vue'
import Nav from '@/views/Nav.vue'
import Content from '@/views/Content.vue'
import Footer from '@/views/Footer.vue'

export default {
  components: {
    Header, Nav, Content, Footer
  }  
}
</script>

<style>
</style>
