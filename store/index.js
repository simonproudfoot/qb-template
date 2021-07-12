export const state = () => ({
    globals: {},
})

export const mutations = {
    updateGlobals: (state, value) => {
       state.globals = Object.assign({}, state.globals, value)
    }
}

export const actions = {
   async nuxtServerInit ({ commit, state }, { req }) {
      if (state.globals.length) return
      try {
        let globals = await fetch( `https://quikblocs.firebaseio.com/projects/test%20_Ov3x7vYA1IOI6L6Lu5iSpSRSYHu1/globals.json`).then(res => res.json())
        commit("updateGlobals", globals)
      } catch (err) {
        console.log(err)
      }
   }
}