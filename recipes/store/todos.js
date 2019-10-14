export const state = () => ({
  list: []
})

export const mutations = {
  add(state, text) {
    console.log(state.list)
    state.list.push({
      text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}
