<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="pa-8 my-8" v-for="room in rooms" :key="">
        {{ room.articleBody }}
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import type { SocialMediaPosting } from '~/../cms/paper-cms/models/types';
import type { Fetch } from '../plugins/fetch';

export default {
  name: 'InspirePage',

  async asyncData({ $fetch }: { $fetch: Fetch }) {
    const rooms: SocialMediaPosting[] = await $fetch('v1/SocialMediaPosting');
    console.log(rooms[0]);

    return { rooms };
  },
};
</script>
