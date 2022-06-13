import { Context, Plugin } from '@nuxt/types';

declare module '@nuxt/types' {
  interface Context {
    $cms(req: Context['req'], apiPath: string): Promise<null | any>;
  }
}

const cms: Plugin = (context) => {
  context.$cms = async (req: Context['req'], apiPath: string) => {
    console.log(`Accessing CMS ${apiPath}…`);

    let baseUrl;
    if (process.client) {
      baseUrl = location?.href;
    } else if (process.server) {
      const protocol = process.env.TLS_ACTIVE ? 'https://' : 'http://';
      baseUrl = protocol + req?.headers?.host;
    }

    const url = new URL(['api', apiPath].join('/'), baseUrl).toString();

    console.log({ apiUrl: url });

    const data = await context
      .$axios(url)
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

export default cms;
