/* eslint no-console: "warn" */
/* eslint no-prototype-builtins: "off" */

// inisial global state
export const state = () => ({
  listMenu: [],
  Name: '',
  Image: '',
  Description: '',
  Menu: {},
  listMatkul: [],
  id: '',
  editMenuDetail: {
    Name: '',
    Image: '',
    Description: ''
  }
})
export const mutations = {
  /*
   * Function setState -- to set state
   * @param   state   Object  Nuxt API Context
   * @param   params  Object  Parameter to Set to Store State
   * return   nothing
   */
  setState(state, params) {
    const keys = Object.keys(params)
    keys.forEach((key) => (state[key] = params[key]))
  },
  addEditMenuDetail(state, name, image, description) {
    state.editMenuDetail.Name = name
    state.editMenuDetail.Image = image
    state.editMenuDetail.Description = description
    console.log(state.editMenuDetail)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}

export const actions = {
  // ==================================================================================================================
  // ***********************************************PROCESSING DATA RESULT FROM AXIOS*************************************************
  // ==================================================================================================================
  /*
   * Change the state based on the results from axios
   * @return nothing
   */
  setAllMenu({ commit }, outcome) {
    commit('setState', { listMenu: outcome.data })
  },
  setMenu({ commit }, outcome) {
    commit('setState', { Name: outcome.data.Name })
    commit('setState', { Image: outcome.data.Image })
    commit('setState', { Description: outcome.data.Desc })
  },
  setAllMatkul({ commit }, outcome) {
    commit('setState', { listMatkul: outcome.data })
  },
  setId({ commit }, outcome) {
    commit('setState', { id: outcome })
  },
  // ==================================================================================================================
  // ***********************************************AXIOS TO CRUD DATA*************************************************
  // ==================================================================================================================
  /*
   * Function getAllMenu
   * Desc  get data Menu
   * @return promise
   */
  getAllMenu({ dispatch }) {
    return this.$axios.$get('menu').catch((error) => {
      // handle error
      if (error.response.status === 404) {
        console.log('aaaa')
      }
    })
  },
  /*
   * Function getMenuById
   * Desc  get data menu
   * @return promise
   */
  getMenuById({ dispatch }, { id }) {
    return this.$axios.$get('menu/' + id).catch((error) => {
      // handle error
      if (error.response.status === 404) {
        console.log('aaaa')
      }
    })
  },
  /*
   * Function editMenuById
   * Desc  edit data menu
   * @return promise
   */
  editMenuById({ dispatch }, { id, name, image, description }) {
    return this.$axios
      .$put('menu/' + id, { Name: name, Image: image, Desc: description })
      .then((Response) => {})
      .catch((error) => {
        // handle error
        if (error.response.status === 404) {
          console.log('aaaa')
        }
      })
  },
  /*
   * Function addMenu
   * Desc  add data menu
   * @return promise
   */
  addMenu({ dispatch }, { name, image, description }) {
    return this.$axios
      .$post('menu', { Name: name, Image: image, Desc: description })
      .then((Response) => {})
      .catch((error) => {
        // handle error
        if (error.response.status === 404) {
          console.log('aaaa')
        }
      })
  },
  /*
   * Function deleteMenuById
   * Desc  delete data menu
   * @return promise
   */
  deleteMenuById({ dispatch }, { id }) {
    return this.$axios
      .$delete('menu/' + id)
      .then((Response) => {})
      .catch((error) => {
        // handle error
        if (error.response.status === 404) {
          console.log('aaaa')
        }
      })
  },
  getAllMatkul({ dispatch }) {
    return this.$axios
      .$get('matkul')
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        // handle error
        if (error.response.status === 404) {
          console.log('aaaa')
        }
      })
  }
}
