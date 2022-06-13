<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <img :src="require(`~/assets/logo.png`)" />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          ADLIN Science — Room Manager
        </v-card-title>
        <v-card-text>
          <p>
            <a
              href="https://github.com/JulianCataldo/paper-cms"
              target="_blank"
              rel="noopener noreferrer"
              title="CMS"
              >Paper CMS</a
            >
            is used for Back office + API server. <br />
            Nuxt 2 is used for the front-end with:
          </p>
          <ul class="pb-4">
            <li>TypeScript</li>
            <li>Vuetify</li>
            <li>Toolings</li>
            <li>…</li>
          </ul>
          <p>
            For more information on
            <strong>ADLIN Science — Room Manager</strong>, check out the
            <a
              href="https://github.com/JulianCataldo/adlin-room-manager"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>
            on GitHub.
          </p>
          <p>
            If you have questions, don't hesitate to contact me
            <a
              href="https://www.juliancataldo.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              on my website</a
            >.
          </p>

          <div class="text-right">
            <em><small>&mdash; Julian Cataldo</small></em>
          </div>
          <hr class="my-3" />
        </v-card-text>
        <v-card-actions class="mx-3 mb-8">
          <v-spacer />
          <v-btn color="primary" nuxt to="/rooms"> Show me the Rooms! </v-btn>
        </v-card-actions>

        <v-card class="logo py-8 d-flex justify-space-around">
          <NuxtLogo />
          <VuetifyLogo />
        </v-card>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>
