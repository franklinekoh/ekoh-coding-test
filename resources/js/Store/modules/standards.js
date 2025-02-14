const state = () => ({
  items: []
})

// getters
const getters = {
  cartProducts: (state) => {
    return state.items;
  }
}

// actions
const actions = {
  addItemToStandards ({ state, commit }, standard) {
        commit('addItemToStandards', { standard })
    },
    removeItemFromStandards({ state, commit }, standard) {
        commit('removeItemFromStandards', { standard })
    },
    clearAllItemsFromStandards({state, commit}){
        commit('clearAllItemsFromStandards')
    }
}

// mutations
const mutations = {
    addItemToStandards (state, { standard }) {
        state.items.push(standard)
    },
    removeItemFromStandards (state, { standard }){
        state.items = state.items.filter((value) => {
            return value.code === standard.code
        })
    },
    clearAllItemsFromStandards (state){
        state.items = []
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
