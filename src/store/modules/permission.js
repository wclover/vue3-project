
export function filterAsyncRoutes(routes) {
  return routes
}

import {asyncRoutes} from '@/router/modules/index'

const state = {
  routes: asyncRoutes
}

const mutations = {
  SET_ROUTES(state, routes) {
    state.routes = [...routes]
  }
}

const actions = {
  generateRoutes({ commit }) {
    return new Promise(resolve => {
      const accessedRoutes = filterAsyncRoutes([])
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
