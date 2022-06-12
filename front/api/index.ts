import express from 'express';
import axios from 'axios';

const app = express();

async function fetch(apiPath: string) {
  console.log(`fetching ${apiPath}…`);

  const url = new URL(apiPath, process.env.PRIVATE_CMS).toString();
  const Authorization = `Bearer ${process.env.PRIVATE_CMS_TOKEN}`;

  const data = await axios
    .get(url, { headers: { Authorization } })
    .catch((e) => console.log(e))
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

app.use(express.json());
app.all('/', async function api(req, res) {
  console.log(req.path);

  const data = await fetch('v1/SocialMediaPosting');

  res.json({ data });
});

export default app;
