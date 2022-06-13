<!-- Our HTML sources are trusted -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <v-row justify="center" align="center">
    <v-col v-if="rooms.length" cols="12" sm="8" md="6">
      <v-card v-for="(room, index) in rooms" :key="room._id" class="pa-8 my-8">
        <v-card-title class="headline">
          {{ room.name }}
        </v-card-title>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="350"
          max-width="850"
          :src="require(`~/assets/rooms/room0000${index + 1}.jpg`)"
          class="mt-1 mb-3"
        />

        <v-card-text v-if="room.description">
          <div v-html="room.description"></div>
        </v-card-text>

        <v-card-text v-if="room.address">
          <v-card-title> Address </v-card-title>
          <div v-html="room.address"></div>
        </v-card-text>

        <v-card-text v-if="room.maximumAttendeeCapacity">
          <v-card-title> Capacity </v-card-title>
          <strong v-html="room.maximumAttendeeCapacity" />
          persons
        </v-card-text>

        <v-card-text v-if="room.permittedUsage">
          <v-card-title> Permitted usage </v-card-title>
          <div v-html="room.permittedUsage"></div>
        </v-card-text>

        <v-card-text>
          <v-card-title> Amenities </v-card-title>
          <ul>
            <li v-for="amenity in room.amenityFeature" :key="amenity">
              {{ amenity }}
            </li>
          </ul>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn v-if="room['x-rented']" disabled color="grey" dark>
            Unavailable
          </v-btn>
          <v-btn v-else color="red" @click="rentMe(index)"> Rent me! </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey darken-2">
          Your renting order has been placed!
        </v-card-title>
        <v-card-text class="pt-4">
          Thanks for your interest.<br />
          You will receive a confirmation mail soon 😉
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Go back </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import axios from 'axios';
import { Vue, Component } from 'vue-property-decorator';
import type { Context } from '@nuxt/types';
import type { Room } from '~/../cms/paper-cms/models/types';

@Component({
  async asyncData({ req, $cms }: Context) {
    const rooms: Room[] = await $cms(req, 'v1/Room');
    console.log({ rooms });

    return { rooms };
  },
})
export default class RoomsPage extends Vue {
  rooms: Room[] = [];

  dialog: boolean = false;

  async rentMe(index: number) {
    const room = this.rooms[index];
    const id = room._id;

    await axios
      .post(`/api/v1/Room/${id}`, {
        ...room,
        'x-rented': true,
        // We don't want to reassign entry internal ID
        _id: undefined,
      })
      .then(({ data }: { data: Room[] }) => {
        console.log({ data });
        this.dialog = true;
        this.rooms[index]['x-rented'] = true;
        return data;
      })
      .catch((e) => console.log(e));
  }
}
</script>
