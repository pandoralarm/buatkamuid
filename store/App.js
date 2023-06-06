// import _ from 'lodash'
export const state = () => ({
  theme: null,
})

export const mutations = {
  setTheme: (state, payload) => {
    state.theme = payload
  },
}
