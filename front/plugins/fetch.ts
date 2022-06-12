import { Context, Plugin } from '@nuxt/types';

declare module '@nuxt/types' {
  interface Context {
    $fetch(req: Context['req'], apiPath: string): Promise<null | any>;
  }
}

const fetch: Plugin = (context) => {
  context.$fetch = async (req: Context['req'], apiPath: string) => {
    console.log(`fetching ${apiPath}…`);

    // const url = new URL(apiPath, process.env.PRIVATE_CMS).toString();
    // const Authorization = `Bearer ${process.env.PRIVATE_CMS_TOKEN}`;
    const url = new URL(
      ['api', apiPath].join('/'),
      req?.headers?.referer || location?.href,
    ).toString();

    console.log({ apiUrl: url });

    const data = await context
      .$axios(
        url,
        //  { headers: { Authorization } }
      )
      .catch((error) => console.log(error))
      .then((response) => {
        if (response) {
          console.log('data found');
          return response.data;
        }
        console.log('no data found !');
        return null;
      });
    return data;
  };
};

export default fetch;

// export type Fetch = (req: any,apiPath: string) => Promise<null|any>;

// export default ({ $axios }: NuxtApp, inject: Inject) => {
//   async function fetch(req: Http.re, apiPath: string) : Promise<null|any> {
//     console.log(req.);
//     console.log(`fetching ${apiPath}…` );

//     // const url = new URL(apiPath, process.env.PRIVATE_CMS).toString();
// //     const url = new URL(apiPath, 'http://'+req.headers.host).toString();
// //     // const Authorization = `Bearer ${process.env.PRIVATE_CMS_TOKEN}`;
// // console.log({apiUrl: url});
// //     const data = await $axios(url,
// //       //  { headers: { Authorization } }
// //        )
// //       .catch((error) => console.log({ error }))
// //       .then((response) => {
// //         if (response) {
// //           console.log('data found');
// //           return response.data;
// //         }
// //         console.log('no data found !');
// //         return null;
// //       });
//     return 'data';
//   };

//   inject('fetch', fetch);
// };
