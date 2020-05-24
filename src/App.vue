<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      v-if="login"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo-villa-bella.jpg"
          transition="scale-transition"
          width="40"
        />
      </div>
      </v-app-bar>

    <v-content class="teal lighten-5">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    login: false
  }),
};
</script>
