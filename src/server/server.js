const express = require('express')
const app = express()
const fetch = require('node-fetch');
app.listen(3001, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('server started');
    return;
  }
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/data/:videoId', async ({ params: { videoId } }, res) => {
  try {
    const response = await fetch(`https://play.riffstation.com/api/mir/songs?source=youtube&source_id=${videoId}`);
    const song = await response.json();
    res.send(song);
  } catch (e) {
    console.log('error')
    res.status(500).send(e);
  }
});