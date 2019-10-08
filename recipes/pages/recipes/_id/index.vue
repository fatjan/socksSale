<template>
  <section class="single-recipe">
    <h1>{{ Menu.Name }}</h1>
    <div>
      <img :src="Menu.Image" alt="Menu Enak" />
    </div>
    <div
      class="thumbnail"
      :style="{ backgroundImage: 'url(' + $route.params.id + ')' }"
    ></div>
    <p>{{ Menu.Desc }}</p>
  </section>
</template>

//
<script>
import { mapState } from 'vuex'
export default {
  async mounted() {
    const getMenu = await this.$store.dispatch('menu/getMenuById', {
      id: this.$route.params.id
    })
    await this.$store.dispatch('menu/setMenu', getMenu)
  },
  computed: {
    ...mapState({
      Menu: (state) => state.menu.Menu
    })
  }
}
</script>

<style scoped>
.single-recipe {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
}
</style>
