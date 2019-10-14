<template>
  <section class="single-recipe">
    <h1>{{ Name }}</h1>
    <div>
      <img class="thumbnail" :src="Image" alt="Menu Enak" />
    </div>
    <p>{{ Description }}</p>
    <nuxt-link :to="'/recipes/edit/' + id">Edit</nuxt-link>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="290">
        <template v-slot:activator="{ on }">
          <v-btn color="red" dark v-on="on">Delete Recipe</v-btn>
        </template>
        <v-card>
          <v-card-title class="headline"
            >Are you sure you want to delete this recipe?</v-card-title
          >
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="red darken-1" text @click="dialog = false">No</v-btn>
            <v-btn color="green lighten-1" text @click="deleteMenu">Yes</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      dialog: false
    }
  },
  computed: {
    ...mapState({
      Name: (state) => state.menu.Name,
      Image: (state) => state.menu.Image,
      Description: (state) => state.menu.Description,
      id: (state) => state.menu.id
    })
  },
  async mounted() {
    const getMenu = await this.$store.dispatch('menu/getMenuById', {
      id: this.$route.params.id
    })
    await this.$store.dispatch('menu/setMenu', getMenu)
    await this.$store.dispatch('menu/setId', this.$route.params.id)
  },
  methods: {
    async deleteMenu() {
      await this.$store
        .dispatch('menu/deleteMenuById', {
          id: this.$route.params.id
        })
        .then(() => {
          this.dialog = false
          this.$router.push('/recipes')
        })
    }
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
.thumbnail {
  background-position: center;
  background-size: cover;
  width: 500px;
  height: 100%;
}
</style>
