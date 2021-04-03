<template>
  <v-app>
    <!--START MAIN BAR -->
    <v-app-bar
      app
      color="blue-grey lighten-5"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://emmyseco.com/wp-content/uploads/2021/01/logo_emmyseco.png"
          transition="scale-transition"
        />

      </div>

      <v-spacer></v-spacer>

      <v-btn
        elevation="1"
        href="https://emmyseco.com/"
        target="_blank"
        rounded
      >
        <span class="mr-2">Web principal</span>
        <v-icon>mdi-web</v-icon>
      </v-btn>
      <v-btn
        class="mr-2 ml-2"
        elevation="1"
        href="https://ve.linkedin.com/in/emmyseco"
        color="primary"
        icon
        rounded
      >
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn
        class="mr-2 ml-2"
        elevation="1"
        href="https://www.instagram.com/emmyseco/"
        color="warning"
        icon
        rounded
      >
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
      <v-btn
        class="mr-2 ml-2"
        elevation="1"
        href="https://www.youtube.com/channel/UCfm4n6H3p4goXhgNFD2-icQ"
        color="red"
        icon
        rounded
      >
        <v-icon>mdi-youtube</v-icon>
      </v-btn>
    </v-app-bar>
    <!--END MAIN BAR -->
    <!--START MAIN CONTENT-->
    <v-main class="light-blue lighten-5">
      <router-view></router-view>
    </v-main>
    <!--END MAIN CONTENT-->
    <!--START FOOTER-->
    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        Since 2010 to {{ new Date().getFullYear() }} — <strong>Emmy Seco</strong>
      </v-col>
    </v-footer>
    <!--END FOOTER-->
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
