import type { Inject, NuxtApp } from '@nuxt/types/app';

export type Fetch = (apiPath: string) => null | any;

export default ({ $axios }: NuxtApp, inject: Inject) => {
  async function fetch(apiPath: string) {
    console.log(`fetching ${apiPath}…`);

    const url = new URL(apiPath, process.env.PRIVATE_CMS).toString();
    const Authorization = `Bearer ${process.env.PRIVATE_CMS_TOKEN}`;

    const data = await $axios(url, { headers: { Authorization } })
      .catch((error) => console.log({ error }))
      .then((response) => {
        if (response) {
          console.log('data found');
          return response.data;
        }
        console.log('no data found !');
        return null;
      });
    return data;
  }

  inject('fetch', fetch);
};
