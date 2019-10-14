<template>
  <v-app dark>
    <Nav />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Nav from './partials/nav'
export default {
  components: {
    Nav
  }
}
</script>
