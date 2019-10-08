/* eslint no-console: "warn" */
/* eslint no-prototype-builtins: "off" */

// inisial global state
export const state = () => ({
  listMenu: [],
  Menu: {}
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
  }
}

export const actions = {
  // ==================================================================================================================
  // ***********************************************PROCESSING DATA RESULT FROM AXIOS*************************************************
  // ==================================================================================================================
  /*
   * Function setAllBiller
   * @param  Array   listBiller     List Biller Data
   * @return nothing
   */
  setAllMenu({ commit }, outcome) {
    commit('setState', { listMenu: outcome.data })
  },
  setMenu({ commit }, outcome) {
    commit('setState', { Menu: outcome.data })
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
  }
}
