import express from 'express';
import axios, { Method } from 'axios';

const app = express();

async function cms(
  apiPath: string,
  method: Method,
  body: null | object = null,
) {
  console.log(`Accessing cms ${apiPath}…`);

  const url = new URL(apiPath, process.env.PRIVATE_CMS).toString();
  const Authorization = `Bearer ${process.env.PRIVATE_CMS_TOKEN}`;

  const data = await axios({
    url,
    method,
    headers: { Authorization },
    data: body,
  })
    .catch((e) => console.log(e))
    .then((response) => {
      if (response) {
        console.log('data found: ', response.data);
        return response.data;
      }
      console.log('no data found !');
      return null;
    });
  return data;
}

app.use(express.json());
app.all('/*', async function api(req, res) {
  console.log(req.path);

  const data = await cms(req.path, <Method>req.method, req?.body);

  res.json(data);
});

export default app;
