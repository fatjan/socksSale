<template>
  <div>
    <div v-for="item in listMenu" :key="item.id">
      <Recipe
        :id="item.id"
        :thumbnail="item.Image"
        :title="item.Name"
        :preview-text="item.Desc"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Recipe from '@/components/Recipe'
export default {
  components: {
    Recipe
  },
  async mounted() {
    const getAllMenus = await this.$store.dispatch('menu/getAllMenu')
    await this.$store.dispatch('menu/setAllMenu', getAllMenus)
  },
  computed: {
    ...mapState({
      listMenu: (state) => state.menu.listMenu
    })
  }
}
</script>

<style scoped>
.recipes {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
</style>
