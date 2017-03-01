import cool from 'cool-ascii-faces';
import express from 'express';

const app = express();

app.use('/', express.static('public'));

app.get('/cool', function (request, response) {
  response.send(cool());
});

app.listen(process.env.PORT || 3000);
