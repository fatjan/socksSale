<template>
  <div>{{ Matkul }}</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      Matkul: (state) => state.menu.Matkul
    })
  },
  async mounted() {
    const getMatkul = await this.$store.dispatch('menu/getAllMatkul')
    await this.$store.dispatch('menu/setAllMatkul', getMatkul)
  }
}
</script>
