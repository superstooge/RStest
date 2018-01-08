const express = require('express')
const app = express()


app.listen(3001, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log('server started');
    return;
  }
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/data/:videoId', function (req, res)  {
    var cmd=require('node-cmd');
    cmd.get(
        'curl "https://play.riffstation.com/api/mir/songs?source=youtube&source_id='+req.params.videoId+'"',
        function(err, data, stderr){
            //console.log(data)
            res.send(data)
        }
    );

  
})