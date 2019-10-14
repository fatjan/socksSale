<template>
  <div>
    <v-layout row wrap>
      <v-col cols="12" md="10"></v-col>
      <v-col cols="12" md="2">
        <v-btn color="green" to="/recipes/add">Add Recipe</v-btn>
      </v-col>
    </v-layout>
    <v-layout row wrap>
      <v-col v-for="item in listMenu" :key="item.id" cols="10" md="4">
        <Recipe
          :id="item.id"
          :thumbnail="item.Image"
          :title="item.Name"
          :preview-text="item.Desc"
        />
      </v-col>
    </v-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Recipe from '@/components/Recipe'
export default {
  components: {
    Recipe
  },
  computed: {
    ...mapState({
      listMenu: (state) => state.menu.listMenu
    })
  },
  async mounted() {
    const getAllMenus = await this.$store.dispatch('menu/getAllMenu')
    await this.$store.dispatch('menu/setAllMenu', getAllMenus)
  }
}
</script>
