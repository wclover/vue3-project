const state = {
  fold: localStorage.getItem('vue3-fold') === 'true' || false
}

const mutations = {
  CHANGE_FOLD(state) {
    state.fold = !state.fold
    localStorage.setItem('vue3-fold', state.fold)
  }
}

const actions = {
  changeFold({commit}) {
    commit('CHANGE_FOLD')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
