<template>
  <article class="recipe">
    <div
      class="thumbnail"
      :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
    ></div>
    <nuxt-link :to="'/recipes/' + id">
      <h1>{{ title }}</h1>
    </nuxt-link>
    <p>{{ previewText }}</p>
  </article>
</template>

<script>
export default {
  props: {
    thumbnail: {
      type: String,
      default:
        'https://i1.wp.com/foodandnutrition.org/wp-content/uploads/fertility-food-1.jpg?resize=780%2C520&ssl=1'
    },
    title: {
      type: String,
      default: 'this is food'
    },
    previewText: {
      type: String,
      default: 'this food is great'
    },
    id: String
  }
}
</script>

<style scoped>
.recipe {
  box-sizing: border-box;
  width: 280px;
  padding: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #aaa;
  margin: 10px;
}
.thumbnail {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 200px;
}
</style>
