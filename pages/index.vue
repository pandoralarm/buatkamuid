<template>
  <div :class="`theme__${theme}`">
    <NavBar />
    <LandingHeroSection />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      availableThemes: ['durst', 'helga', 'dusk', 'bright', 'rose'],
    }
  },

  computed: {
    theme() {
      return this.$store.state.App.theme
    },
  },

  mounted() {
    this.themeInjector()
  },

  methods: {
    themeInjector() {
      const currentTheme = localStorage.getItem('theme')

      if (currentTheme) {
        this.$store.commit('App/setTheme', currentTheme)
        // Remove currentTheme from availableThemes
        const index = this.availableThemes.indexOf(currentTheme)
        if (index !== -1) {
          this.availableThemes.splice(index, 1)
        }

        // Pick random theme from modified availableThemes
        const randomIndex = Math.floor(
          Math.random() * this.availableThemes.length
        )
        const newPickedTheme = this.availableThemes[randomIndex]

        // Set localstorage theme with new picked theme
        localStorage.setItem('theme', newPickedTheme)

        // Set this.theme with the new picked theme
        this.$store.commit('App/setTheme', newPickedTheme)
      } else {
        // Pick random theme from availableThemes
        const randomIndex = Math.floor(
          Math.random() * this.availableThemes.length
        )
        const newPickedTheme = this.availableThemes[randomIndex]

        // Set localstorage theme with new picked theme
        localStorage.setItem('theme', newPickedTheme)

        // Set this.theme with the new picked theme
        this.$store.commit('App/setTheme', newPickedTheme)
      }
    },
  },
}
</script>
