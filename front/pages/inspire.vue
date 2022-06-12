<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" v-if="rooms.length">
      <v-card class="pa-8 my-8" v-for="room in rooms" :key="room._id">
        {{ room.articleBody }}
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import type { SocialMediaPosting } from '~/../cms/paper-cms/models/types';

export default Vue.extend({
  name: 'InspirePage',

  async asyncData({ req, $fetch }) {
    // console.log(req.headers.host);
    const rooms: SocialMediaPosting[] = await $fetch(
      req,
      'v1/SocialMediaPosting',
    );
    console.log({ rooms });

    return { rooms };
  },
});
</script>
