<template>
  <div>
    <p>Add Recipe Here</p>
    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model="nameModel"
        :counter="5"
        :rules="nameRules"
        label="Recipe Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="imageModel"
        :rules="imageRules"
        label="Image of Recipe"
        required
      ></v-text-field>
      <v-text-field
        v-model="descModel"
        :counter="25"
        :rules="descRules"
        label="Description of Recipe"
        required
      ></v-text-field>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="addRecipe"
        >Submit</v-btn
      >
      <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
      <v-btn color="warning" @click="resetValidation">Back</v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      Name: (state) => state.menu.Name,
      Image: (state) => state.menu.Image,
      Description: (state) => state.menu.Description
    }),
    nameModel: {
      get() {
        return this.Name
      },
      set(value) {
        this.setState({ Name: value })
      }
    },
    imageModel: {
      get() {
        return this.Image
      },
      set(value) {
        this.setState({ Image: value })
      }
    },
    descModel: {
      get() {
        return this.Description
      },
      set(value) {
        this.setState({ Description: value })
      }
    }
  },
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length >= 5) || 'Name must be more than 5 characters'
    ],
    image: '',
    imageRules: [(v) => !!v || 'Image is required'],
    description: '',
    descRules: [
      (v) => !!v || 'Description is required',
      (v) => (v && v.length >= 20) || 'Name must be more than 20 characters'
    ]
  }),
  methods: {
    ...mapMutations({ setState: 'menu/setState' }),
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    async addRecipe() {
      await this.$store.dispatch('menu/addMenu', {
        name: this.Name,
        image: this.Image,
        description: this.Description
      })
      this.$refs.form.reset()
      this.$router.push('/recipes')
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
